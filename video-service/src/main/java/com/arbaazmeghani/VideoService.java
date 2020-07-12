package com.arbaazmeghani;

import org.springframework.stereotype.Service;

@Service
public class VideoService {

    private VideoRepository repository;

    public VideoService(VideoRepository repository) {
        this.repository = repository;
    }


    public String retrieveVideos() {
        return null;
    }

    public void saveVideo() {

    }
}
