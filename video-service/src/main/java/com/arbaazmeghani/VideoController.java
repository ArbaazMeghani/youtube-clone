package com.arbaazmeghani;

import org.springframework.web.bind.annotation.*;

@RestController
public class VideoController {

    private VideoService service;

    public VideoController(VideoService service) {
        this.service = service;
    }

    @GetMapping("/videos")
    public String retrieveVideo() {
        return "hello world";
    }

    @PostMapping("/videos")
    public void saveVideo(@ModelAttribute Video video) {
        service.saveVideo(video);
    }
}