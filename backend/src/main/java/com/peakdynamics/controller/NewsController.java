package com.peakdynamics.controller;

import com.peakdynamics.model.News;
import com.peakdynamics.model.Club;
import com.peakdynamics.service.NewsService;
import com.peakdynamics.service.ClubService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/news")
@CrossOrigin(origins = "http://localhost:3000")
public class NewsController {

    @Autowired
    private NewsService newsService;

    @Autowired
    private ClubService clubService;

    @GetMapping
    public List<News> getAllNews() {
        return newsService.getAllNews();
    }

    @GetMapping("/{id}")
    public News getNewsById(@PathVariable Long id) {
        return newsService.getNewsById(id);
    }

    @GetMapping("/club/{clubId}")
    public List<News> getNewsByClub(@PathVariable Long clubId) {
        Club club = clubService.getClubById(clubId);
        if (club != null) {
            return newsService.getNewsByClub(club);
        }
        return List.of();
    }

    @GetMapping("/latest")
    public List<News> getLatestNews() {
        return newsService.getLatestNews();
    }
}