package com.arbaazmeghani.filestorage;

import lombok.SneakyThrows;
import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.disk.DiskFileItem;
import org.apache.commons.io.IOUtils;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.commons.CommonsMultipartFile;

import java.io.*;
import java.net.InetAddress;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.UUID;

@Service
public class FileStorageService {

    private final String UPLOAD_ROOT_DIRECTORY;
    private final String host;

    public FileStorageService(Environment environment) throws IOException {
        UPLOAD_ROOT_DIRECTORY = environment.getProperty("storage.root");

        String port = environment.getProperty("server.port");
        String contextPath = environment.getProperty("server.servlet.context-path");
        String retrievePath = "/assets/";

        host = "http://" + InetAddress.getLocalHost().getHostAddress() + ":" + port + contextPath + retrievePath;

        createDirectory(UPLOAD_ROOT_DIRECTORY);
    }

    public String save(String subdirectory, MultipartFile file) throws IOException {
        createDirectory(UPLOAD_ROOT_DIRECTORY + "/" + subdirectory);
        Path destination = Paths.get(UPLOAD_ROOT_DIRECTORY, subdirectory, generateUniqueFileName(file.getOriginalFilename()));
        return save(destination, file);
    }

    public String save(MultipartFile file) throws IOException {
        Path destination = Paths.get(UPLOAD_ROOT_DIRECTORY, generateUniqueFileName(file.getOriginalFilename()));
        return save(destination, file);
    }

    private String save(Path destination, MultipartFile file) throws IOException {
        Files.copy(file.getInputStream(), destination, StandardCopyOption.REPLACE_EXISTING);
        return host + destination.getFileName();
    }

    private void createDirectory(String directory) throws IOException {
        Path rootPath = Paths.get(directory);
        if(!Files.exists(rootPath)) {
            Files.createDirectory(rootPath);
        }
    }

    private String generateUniqueFileName(String fileName) {
        String[] fileInfo = fileName.split("\\.");
        if(fileInfo.length < 2) {
            throw new RuntimeException("File does not have a type");
        }

        return fileInfo[0] + UUID.randomUUID() + "." + fileInfo[1];
    }

    @SneakyThrows
    public MultipartFile retrieve(String fileName) {
        Path path = Paths.get(UPLOAD_ROOT_DIRECTORY, fileName);
        File file = new File(path.toUri());
        FileItem fileItem = new DiskFileItem("file", Files.probeContentType(path), false, file.getName(), (int) file.length(), file.getParentFile());

        InputStream input = new FileInputStream(file);
        OutputStream os = fileItem.getOutputStream();
        IOUtils.copy(input, os);

        return new CommonsMultipartFile(fileItem);
    }
}
