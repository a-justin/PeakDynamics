package com.peakdynamics.controller;

import com.peakdynamics.model.Transfer;
import com.peakdynamics.model.Club;
import com.peakdynamics.service.TransferService;
import com.peakdynamics.service.ClubService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/transfers")
@CrossOrigin(origins = "http://localhost:3000")
public class TransferController {

    @Autowired
    private TransferService transferService;

    @Autowired
    private ClubService clubService;

    @GetMapping
    public List<Transfer> getAllTransfers() {
        return transferService.getAllTransfers();
    }

    @GetMapping("/{id}")
    public Transfer getTransferById(@PathVariable Long id) {
        return transferService.getTransferById(id);
    }

    @GetMapping("/club/{clubId}")
    public List<Transfer> getTransfersByClub(@PathVariable Long clubId) {
        Club club = clubService.getClubById(clubId);
        if (club != null) {
            return transferService.getTransfersByClub(club);
        }
        return List.of();
    }
}