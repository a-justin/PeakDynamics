package com.peakdynamics.service;

import com.peakdynamics.model.Transfer;
import com.peakdynamics.model.Club;
import java.util.List;

public interface TransferService {
    List<Transfer> getAllTransfers();
    Transfer getTransferById(Long id);
    List<Transfer> getTransfersByClub(Club club);
}