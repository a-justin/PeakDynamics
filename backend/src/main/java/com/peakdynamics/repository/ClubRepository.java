package com.peakdynamics.repository;

import com.peakdynamics.model.Club;
import com.peakdynamics.model.League;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface ClubRepository extends JpaRepository<Club, Long> {
    // Find all clubs in a specific league
    List<Club> findByLeague(League league);
    // Find a club by its name
    Club findByName(String name);
}