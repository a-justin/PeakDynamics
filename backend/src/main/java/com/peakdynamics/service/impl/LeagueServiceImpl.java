package com.peakdynamics.service.impl;

import com.peakdynamics.model.League;
import com.peakdynamics.repository.LeagueRepository;
import com.peakdynamics.service.LeagueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class LeagueServiceImpl implements LeagueService {

    @Autowired
    private LeagueRepository leagueRepository;

    @Override
    public List<League> getAllLeagues() {
        return leagueRepository.findAll();
    }

    @Override
    public League getLeagueById(Long id) {
        return leagueRepository.findById(id).orElse(null);
    }

    @Override
    public League getLeagueByName(String name) {
        return leagueRepository.findByName(name);
    }
}