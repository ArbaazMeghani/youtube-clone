package com.arbaazmeghani.videos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VideoRepository extends JpaRepository<Video, Long> {
    @Query(value = "SELECT * FROM VIDEO WHERE TITLE LIKE %?1% OR DESCRIPTION LIKE %?1% OR AUTHOR LIKE %?1%", nativeQuery = true)
    List<Video> findBySearchQuery(String searchQuery);
}
