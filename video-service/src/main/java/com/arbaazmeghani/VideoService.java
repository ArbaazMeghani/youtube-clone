package com.arbaazmeghani;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class VideoService {

    private VideoRepository repository;

    public VideoService(VideoRepository repository) {
        this.repository = repository;
    }

    public String retrieveVideos() {
        return null;
    }

    public void saveVideo(Video video) {
        log.info(video.getAuthor());
        log.info(video.getDescription());
        log.info(video.getTitle());
    }
}
