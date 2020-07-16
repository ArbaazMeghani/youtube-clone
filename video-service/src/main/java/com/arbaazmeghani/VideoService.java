package com.arbaazmeghani;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.UUID;

@Slf4j
@Service
public class VideoService {

    private VideoRepository repository;
    private FileStorageService fileStorageService;

    public VideoService(VideoRepository repository, FileStorageService fileStorageService) {
        this.repository = repository;
        this.fileStorageService = fileStorageService;
    }

    public String retrieveVideos() {
        return null;
    }

    public void saveVideo(Video video) throws IOException {
        log.info(video.getAuthor());
        log.info(video.getDescription());
        log.info(video.getTitle());
        log.info(video.getThumbnail().getOriginalFilename());
        log.info(video.getVideo().getOriginalFilename());
        fileStorageService.save(video.getThumbnail());
    }
}
