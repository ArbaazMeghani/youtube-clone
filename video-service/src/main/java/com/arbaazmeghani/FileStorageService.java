package com.arbaazmeghani;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.NotNull;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.UUID;

@Service
public class FileStorageService {

    private final String UPLOAD_ROOT_DIRECTORY = "./uploads";

    public FileStorageService() throws IOException {
        createDirectory(UPLOAD_ROOT_DIRECTORY);
    }

    public void save(String subdirectory, MultipartFile file) throws IOException {
        createDirectory(UPLOAD_ROOT_DIRECTORY + "/" + subdirectory);
        Path destination = Paths.get(UPLOAD_ROOT_DIRECTORY, subdirectory, generateUniqueFileName(file.getOriginalFilename()));
        Files.copy(file.getInputStream(), destination, StandardCopyOption.REPLACE_EXISTING);
    }

    public void save(MultipartFile file) throws IOException {
        Path destination = Paths.get(UPLOAD_ROOT_DIRECTORY, generateUniqueFileName(file.getOriginalFilename()));
        Files.copy(file.getInputStream(), destination, StandardCopyOption.REPLACE_EXISTING);
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
}
