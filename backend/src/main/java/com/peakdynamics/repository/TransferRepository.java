package com.peakdynamics.repository;

import com.peakdynamics.model.Transfer;
import com.peakdynamics.model.Club;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface TransferRepository extends JpaRepository<Transfer, Long> {
    // Find transfers involving a specific club (either as fromClub or toClub)
    List<Transfer> findByFromClubOrToClub(Club fromClub, Club toClub);
}