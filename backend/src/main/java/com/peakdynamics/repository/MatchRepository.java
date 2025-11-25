package com.peakdynamics.repository;

import com.peakdynamics.model.Match;
import com.peakdynamics.model.Club;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface MatchRepository extends JpaRepository<Match, Long> {
    // Find matches by home team or away team
    List<Match> findByHomeTeamOrAwayTeam(Club homeTeam, Club awayTeam);
    // Find matches by status (e.g., "SCHEDULED", "FT")
    List<Match> findByStatus(String status);
}