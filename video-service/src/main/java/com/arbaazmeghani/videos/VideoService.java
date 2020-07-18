package com.arbaazmeghani.videos;

import com.arbaazmeghani.filestorage.FileStorageService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Slf4j
@Service
public class VideoService {

    private VideoRepository repository;
    private FileStorageService fileStorageService;

    public VideoService(VideoRepository repository, FileStorageService fileStorageService) {
        this.repository = repository;
        this.fileStorageService = fileStorageService;
    }

    public List<Video> retrieveAllVideoData() {
        return repository.findAll();
    }

    public MultipartFile retrieveFile(String fileName) {
        return fileStorageService.retrieve(fileName);
    }

    public void saveVideo(Video video) throws IOException {
        String thumbnailPath = fileStorageService.save(video.getThumbnail());
        String videoPath = fileStorageService.save(video.getVideo());

        video.setThumbnailSrc(thumbnailPath);
        video.setVideoSrc(videoPath);

        repository.save(video);
    }
}
