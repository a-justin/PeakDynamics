package com.peakdynamics.controller;

import com.peakdynamics.model.Match;
import com.peakdynamics.model.Club;
import com.peakdynamics.service.MatchService;
import com.peakdynamics.service.ClubService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/matches")
@CrossOrigin(origins = "http://localhost:3000")
public class MatchController {

    @Autowired
    private MatchService matchService;

    @Autowired
    private ClubService clubService;

    @GetMapping
    public List<Match> getAllMatches() {
        return matchService.getAllMatches();
    }

    @GetMapping("/{id}")
    public Match getMatchById(@PathVariable Long id) {
        return matchService.getMatchById(id);
    }

    @GetMapping("/club/{clubId}")
    public List<Match> getMatchesByClub(@PathVariable Long clubId) {
        Club club = clubService.getClubById(clubId);
        if (club != null) {
            return matchService.getMatchesByClub(club);
        }
        return List.of();
    }

    @GetMapping("/status/{status}")
    public List<Match> getMatchesByStatus(@PathVariable String status) {
        return matchService.getMatchesByStatus(status);
    }
}