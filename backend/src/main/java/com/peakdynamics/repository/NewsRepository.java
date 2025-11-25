package com.peakdynamics.repository;

import com.peakdynamics.model.News;
import com.peakdynamics.model.Club;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface NewsRepository extends JpaRepository<News, Long> {
    // Find news related to a specific club
    List<News> findByClub(Club club);
    // Find latest news, ordered by published date descending
    List<News> findTop10ByOrderByPublishedDateDesc();
}