package com.arbaazmeghani.filestorage;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
public class FileController {

    private FileStorageService service;

    public FileController(FileStorageService service) {
        this.service = service;
    }

    @GetMapping("/assets/{fileName}")
    public ResponseEntity<byte[]> retrieveFile(@PathVariable String fileName) throws IOException {
        MultipartFile multipartFile = service.retrieve(fileName);
        return ResponseEntity.status(HttpStatus.OK)
                .contentType(MediaType.valueOf(multipartFile.getContentType()))
                .body(multipartFile.getBytes());
    }

}
