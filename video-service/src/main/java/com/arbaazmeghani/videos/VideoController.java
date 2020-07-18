package com.arbaazmeghani.videos;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
public class VideoController {

    private VideoService service;

    public VideoController(VideoService service) {
        this.service = service;
    }

    @GetMapping("/videos")
    public List<Video> retrieveVideoData() {
        return service.retrieveAllVideoData();
    }

    @PostMapping("/videos")
    public ResponseEntity<Video> saveVideo(@ModelAttribute Video video) throws IOException {
        service.saveVideo(video);
        return ResponseEntity.status(HttpStatus.OK).body(video);
    }
}