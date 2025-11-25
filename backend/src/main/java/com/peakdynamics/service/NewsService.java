package com.peakdynamics.service;

import com.peakdynamics.model.News;
import com.peakdynamics.model.Club;
import java.util.List;

public interface NewsService {
    List<News> getAllNews();
    News getNewsById(Long id);
    List<News> getNewsByClub(Club club);
    List<News> getLatestNews();
}