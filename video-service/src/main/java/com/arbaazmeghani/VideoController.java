package com.arbaazmeghani;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

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
    public void saveVideo() {

    }
}