package com.peakdynamics.repository;

import com.peakdynamics.model.League;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LeagueRepository extends JpaRepository<League, Long> {
    // Custom query to find a league by its name
    League findByName(String name);
}