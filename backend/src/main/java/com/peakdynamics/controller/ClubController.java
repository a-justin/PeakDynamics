package com.peakdynamics.controller;

import com.peakdynamics.dto.ClubStandingDTO;
import com.peakdynamics.model.Club;
import com.peakdynamics.model.League;
import com.peakdynamics.service.ClubService;
import com.peakdynamics.service.LeagueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/clubs")
@CrossOrigin(origins = "http://localhost:3000")
public class ClubController {

    @Autowired
    private ClubService clubService;

    @Autowired
    private LeagueService leagueService;

    @GetMapping
    public List<Club> getAllClubs() {
        return clubService.getAllClubs();
    }

    @GetMapping("/{id}")
    public Club getClubById(@PathVariable Long id) {
        return clubService.getClubById(id);
    }

    @GetMapping("/name/{name}")
    public Club getClubByName(@PathVariable String name) {
        return clubService.getClubByName(name);
    }

    @GetMapping("/league/{leagueId}")
    public List<Club> getClubsByLeague(@PathVariable Long leagueId) {
        League league = leagueService.getLeagueById(leagueId);
        if (league != null) {
            return clubService.getClubsByLeague(league);
        }
        return List.of(); // Return empty list if league not found
    }

    @GetMapping("/league/{leagueId}/standings")
    public List<ClubStandingDTO> getStandingsByLeague(@PathVariable Long leagueId) {
        return clubService.getStandingsByLeague(leagueId);
    }
}