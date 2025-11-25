package com.peakdynamics.repository;

import com.peakdynamics.model.Player;
import com.peakdynamics.model.Club;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface PlayerRepository extends JpaRepository<Player, Long> {
    // Find all players in a specific club
    List<Player> findByClub(Club club);
}