package com.peakdynamics.service.impl;

import com.peakdynamics.model.Match;
import com.peakdynamics.model.Club;
import com.peakdynamics.repository.MatchRepository;
import com.peakdynamics.service.MatchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class MatchServiceImpl implements MatchService {

    @Autowired
    private MatchRepository matchRepository;

    @Override
    public List<Match> getAllMatches() {
        return matchRepository.findAll();
    }

    @Override
    public Match getMatchById(Long id) {
        return matchRepository.findById(id).orElse(null);
    }

    @Override
    public List<Match> getMatchesByClub(Club club) {
        return matchRepository.findByHomeTeamOrAwayTeam(club, club);
    }

    @Override
    public List<Match> getMatchesByStatus(String status) {
        return matchRepository.findByStatus(status);
    }
}