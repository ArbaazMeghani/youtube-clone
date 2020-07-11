package com.arbaazmeghani;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class VideoController {
    @GetMapping("/")
    public String helloWorld() {
        return "hello world";
    }
}