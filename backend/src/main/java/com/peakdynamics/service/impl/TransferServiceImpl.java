package com.peakdynamics.service.impl;

import com.peakdynamics.model.Transfer;
import com.peakdynamics.model.Club;
import com.peakdynamics.repository.TransferRepository;
import com.peakdynamics.service.TransferService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class TransferServiceImpl implements TransferService {

    @Autowired
    private TransferRepository transferRepository;

    @Override
    public List<Transfer> getAllTransfers() {
        return transferRepository.findAll();
    }

    @Override
    public Transfer getTransferById(Long id) {
        return transferRepository.findById(id).orElse(null);
    }

    @Override
    public List<Transfer> getTransfersByClub(Club club) {
        return transferRepository.findByFromClubOrToClub(club, club);
    }
}