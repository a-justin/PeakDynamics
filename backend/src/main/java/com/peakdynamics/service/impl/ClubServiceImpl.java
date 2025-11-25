package com.peakdynamics.service.impl;

import com.peakdynamics.dto.ClubStandingDTO;
import com.peakdynamics.model.Club;
import com.peakdynamics.model.League;
import com.peakdynamics.model.Match;
import com.peakdynamics.repository.ClubRepository;
import com.peakdynamics.repository.LeagueRepository;
import com.peakdynamics.repository.MatchRepository;
import com.peakdynamics.service.ClubService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ClubServiceImpl implements ClubService {

    @Autowired
    private ClubRepository clubRepository;

    @Override
    public List<Club> getAllClubs() {
        return clubRepository.findAll();
    }

    @Override
    public Club getClubById(Long id) {
        return clubRepository.findById(id).orElse(null);
    }

    @Override
    public Club getClubByName(String name) {
        return clubRepository.findByName(name);
    }

    @Override
    public List<Club> getClubsByLeague(League league) {
        return clubRepository.findByLeague(league);
    }

    @Autowired
    private LeagueRepository leagueRepository;

    @Autowired
    private MatchRepository matchRepository;

    @Override
    public List<ClubStandingDTO> getStandingsByLeague(Long leagueId) {
        // get all clubs in this league
        League league = leagueRepository.findById(leagueId).orElse(null);
        if (league == null) {
            return new ArrayList<>();
        }

        List<Club> clubs = clubRepository.findByLeague(league);

        // get all finished matches (FT)
        List<Match> matches = matchRepository.findByStatus("FT");

        List<ClubStandingDTO> standings = new ArrayList<>();

        for (Club club : clubs) {
            int played = 0, won = 0, drawn = 0, lost = 0, gf = 0, ga = 0;

            for (Match match : matches) {
                // skip matches that are not from this league
                if (!match.getHomeTeam().getLeague().getId().equals(leagueId) &&
                        !match.getAwayTeam().getLeague().getId().equals(leagueId)) {
                    continue;
                }

                //  only process if this club is involved
                if (match.getHomeTeam().equals(club) || match.getAwayTeam().equals(club)) {
                    played++;

                    int goalsFor = match.getHomeTeam().equals(club)
                            ? match.getHomeTeamScore()
                            : match.getAwayTeamScore();
                    int goalsAgainst = match.getHomeTeam().equals(club)
                            ? match.getAwayTeamScore()
                            : match.getHomeTeamScore();

                    gf += goalsFor;
                    ga += goalsAgainst;

                    if (goalsFor > goalsAgainst) {
                        won++;
                    } else if (goalsFor == goalsAgainst) {
                        drawn++;
                    } else {
                        lost++;
                    }
                }
            }

            int gd = gf - ga;
            int points = (won * 3) + drawn;

            standings.add(new ClubStandingDTO(
                    club.getId(),
                    club.getName(),
                    played, won, drawn, lost, gf, ga, gd, points
            ));
        }

        standings.sort((a, b) -> {
            if (b.getPoints() != a.getPoints()) {
                return b.getPoints() - a.getPoints(); // Points first
            } else if (b.getGd() != a.getGd()) {
                return b.getGd() - a.getGd(); // Then GD
            } else {
                return b.getGf() - a.getGf(); // Then Goals For
            }
        });


        return standings;
    }


}