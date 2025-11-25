package com.peakdynamics.service.impl;

import com.peakdynamics.model.News;
import com.peakdynamics.model.Club;
import com.peakdynamics.repository.NewsRepository;
import com.peakdynamics.service.NewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class NewsServiceImpl implements NewsService {

    @Autowired
    private NewsRepository newsRepository;

    @Override
    public List<News> getAllNews() {
        return newsRepository.findAll();
    }

    @Override
    public News getNewsById(Long id) {
        return newsRepository.findById(id).orElse(null);
    }

    @Override
    public List<News> getNewsByClub(Club club) {
        return newsRepository.findByClub(club);
    }

    @Override
    public List<News> getLatestNews() {
        return newsRepository.findTop10ByOrderByPublishedDateDesc();
    }
}