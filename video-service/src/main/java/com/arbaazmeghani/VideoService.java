package com.arbaazmeghani;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.io.IOException;

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
        String thumbnailPath = fileStorageService.save(video.getThumbnail());
        String videoPath = fileStorageService.save(video.getVideo());

        video.setThumbnailPath(thumbnailPath);
        video.setVideoPath(videoPath);

        repository.save(video);
    }
}
