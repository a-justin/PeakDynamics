package com.peakdynamics.service;

import com.peakdynamics.model.Player;
import com.peakdynamics.model.Club;
import java.util.List;

public interface PlayerService {
    List<Player> getAllPlayers();
    Player getPlayerById(Long id);
    List<Player> getPlayersByClub(Club club);
}