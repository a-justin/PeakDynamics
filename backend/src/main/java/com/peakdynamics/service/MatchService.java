package com.peakdynamics.service;

import com.peakdynamics.model.Match;
import com.peakdynamics.model.Club;
import java.util.List;

public interface MatchService {
    List<Match> getAllMatches();
    Match getMatchById(Long id);
    List<Match> getMatchesByClub(Club club);
    List<Match> getMatchesByStatus(String status);
}