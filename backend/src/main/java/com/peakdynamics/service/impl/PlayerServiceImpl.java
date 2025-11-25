package com.peakdynamics.service.impl;

import com.peakdynamics.model.Player;
import com.peakdynamics.model.Club;
import com.peakdynamics.repository.PlayerRepository;
import com.peakdynamics.service.PlayerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class PlayerServiceImpl implements PlayerService {

    @Autowired
    private PlayerRepository playerRepository;

    @Override
    public List<Player> getAllPlayers() {
        return playerRepository.findAll();
    }

    @Override
    public Player getPlayerById(Long id) {
        return playerRepository.findById(id).orElse(null);
    }

    @Override
    public List<Player> getPlayersByClub(Club club) {
        return playerRepository.findByClub(club);
    }
}