package com.arbaazmeghani.videos;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Transient;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Video {
    @Id
    @GeneratedValue
    Long videoId;

    @JsonIgnore
    @Transient
    MultipartFile video;

    @JsonIgnore
    @Transient
    MultipartFile thumbnail;

    String title;
    String author;
    String description;

    String thumbnailSrc;
    String videoSrc;
}
