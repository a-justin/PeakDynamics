package com.peakdynamics.controller;

import com.peakdynamics.model.Player;
import com.peakdynamics.model.Club;
import com.peakdynamics.service.PlayerService;
import com.peakdynamics.service.ClubService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/players")
@CrossOrigin(origins = "http://localhost:3000")
public class PlayerController {

    @Autowired
    private PlayerService playerService;

    @Autowired
    private ClubService clubService;

    @GetMapping
    public List<Player> getAllPlayers() {
        return playerService.getAllPlayers();
    }

    @GetMapping("/{id}")
    public Player getPlayerById(@PathVariable Long id) {
        return playerService.getPlayerById(id);
    }

    @GetMapping("/club/{clubId}")
    public List<Player> getPlayersByClub(@PathVariable Long clubId) {
        Club club = clubService.getClubById(clubId);
        if (club != null) {
            return playerService.getPlayersByClub(club);
        }
        return List.of();
    }
}