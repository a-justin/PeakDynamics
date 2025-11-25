package com.peakdynamics.service;

import com.peakdynamics.model.Club;
import com.peakdynamics.model.League;
import java.util.List;

public interface LeagueService {
    List<League> getAllLeagues();
    League getLeagueById(Long id);
    League getLeagueByName(String name);

}