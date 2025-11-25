package com.peakdynamics.controller;

import com.peakdynamics.dto.ClubStandingDTO;
import com.peakdynamics.model.League;
import com.peakdynamics.service.ClubService;
import com.peakdynamics.service.LeagueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/leagues")
@CrossOrigin(origins = "http://localhost:3000") // Allow React frontend to access
public class LeagueController {

    @Autowired
    private LeagueService leagueService;

    @Autowired
    private ClubService clubService; // 👈 added to fetch standings

    @GetMapping
    public List<League> getAllLeagues() {
        return leagueService.getAllLeagues();
    }

    @GetMapping("/{id}")
    public League getLeagueById(@PathVariable Long id) {
        return leagueService.getLeagueById(id);
    }

    @GetMapping("/name/{name}")
    public League getLeagueByName(@PathVariable String name) {
        return leagueService.getLeagueByName(name);
    }

    // 👇 NEW: standings for a league
    @GetMapping("/{leagueId}/standings")
    public List<ClubStandingDTO> getStandingsByLeague(@PathVariable Long leagueId) {
        return clubService.getStandingsByLeague(leagueId);
    }
}