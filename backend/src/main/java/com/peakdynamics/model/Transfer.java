package com.peakdynamics.model;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Table(name = "transfers")
public class Transfer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private LocalDate transferDate;

    @Column(nullable = false)
    private BigDecimal transferFee; // Using BigDecimal for currency

    @Column(nullable = false)
    private String transferType; // "PERMANENT", "LOAN"

    // Many-to-One with Player
    @ManyToOne
    @JoinColumn(name = "player_id", nullable = false)
    private Player player;

    // Many-to-One with Club (From)
    @ManyToOne
    @JoinColumn(name = "from_club_id", nullable = false)
    private Club fromClub;

    // Many-to-One with Club (To)
    @ManyToOne
    @JoinColumn(name = "to_club_id", nullable = false)
    private Club toClub;

    // Constructors
    public Transfer() {}

    public Transfer(LocalDate transferDate, BigDecimal transferFee, String transferType, Player player, Club fromClub, Club toClub) {
        this.transferDate = transferDate;
        this.transferFee = transferFee;
        this.transferType = transferType;
        this.player = player;
        this.fromClub = fromClub;
        this.toClub = toClub;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public LocalDate getTransferDate() { return transferDate; }
    public void setTransferDate(LocalDate transferDate) { this.transferDate = transferDate; }

    public BigDecimal getTransferFee() { return transferFee; }
    public void setTransferFee(BigDecimal transferFee) { this.transferFee = transferFee; }

    public String getTransferType() { return transferType; }
    public void setTransferType(String transferType) { this.transferType = transferType; }

    public Player getPlayer() { return player; }
    public void setPlayer(Player player) { this.player = player; }

    public Club getFromClub() { return fromClub; }
    public void setFromClub(Club fromClub) { this.fromClub = fromClub; }

    public Club getToClub() { return toClub; }
    public void setToClub(Club toClub) { this.toClub = toClub; }
}