package com.peakdynamics.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "matches")
public class Match {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private LocalDateTime matchDate;

    @Column(nullable = false)
    private String stadium;

    @Column(nullable = false)
    private String status; // "SCHEDULED", "FT", "POSTPONED"

    @Column(nullable = false)
    private int homeTeamScore;

    @Column(nullable = false)
    private int awayTeamScore;

    // Many-to-One with Club (Home Team)
    @ManyToOne
    @JoinColumn(name = "home_team_id", nullable = false)
    private Club homeTeam;

    // Many-to-One with Club (Away Team)
    @ManyToOne
    @JoinColumn(name = "away_team_id", nullable = false)
    private Club awayTeam;

    // Constructors
    public Match() {}

    public Match(LocalDateTime matchDate, String stadium, String status, int homeTeamScore, int awayTeamScore, Club homeTeam, Club awayTeam) {
        this.matchDate = matchDate;
        this.stadium = stadium;
        this.status = status;
        this.homeTeamScore = homeTeamScore;
        this.awayTeamScore = awayTeamScore;
        this.homeTeam = homeTeam;
        this.awayTeam = awayTeam;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public LocalDateTime getMatchDate() { return matchDate; }
    public void setMatchDate(LocalDateTime matchDate) { this.matchDate = matchDate; }

    public String getStadium() { return stadium; }
    public void setStadium(String stadium) { this.stadium = stadium; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public int getHomeTeamScore() { return homeTeamScore; }
    public void setHomeTeamScore(int homeTeamScore) { this.homeTeamScore = homeTeamScore; }

    public int getAwayTeamScore() { return awayTeamScore; }
    public void setAwayTeamScore(int awayTeamScore) { this.awayTeamScore = awayTeamScore; }

    public Club getHomeTeam() { return homeTeam; }
    public void setHomeTeam(Club homeTeam) { this.homeTeam = homeTeam; }

    public Club getAwayTeam() { return awayTeam; }
    public void setAwayTeam(Club awayTeam) { this.awayTeam = awayTeam; }
}