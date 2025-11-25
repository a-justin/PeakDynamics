package com.peakdynamics.service;

import com.peakdynamics.dto.ClubStandingDTO;
import com.peakdynamics.model.Club;
import com.peakdynamics.model.League;
import java.util.List;

public interface ClubService {
    List<Club> getAllClubs();
    Club getClubById(Long id);
    Club getClubByName(String name);
    List<Club> getClubsByLeague(League league);

    List<ClubStandingDTO> getStandingsByLeague(Long leagueId);


}