package com.peakdynamics.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "clubs")
public class Club {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String stadium;

    // Many-to-One with League
    @ManyToOne
    @JoinColumn(name = "league_id", nullable = false)
    private League league;

    // One-to-Many with Player
    @OneToMany(mappedBy = "club", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Player> players;

    // Constructors
    public Club() {}

    public Club(String name, String stadium, League league) {
        this.name = name;
        this.stadium = stadium;
        this.league = league;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getStadium() { return stadium; }
    public void setStadium(String stadium) { this.stadium = stadium; }

    public League getLeague() { return league; }
    public void setLeague(League league) { this.league = league; }

    public List<Player> getPlayers() { return players; }
    public void setPlayers(List<Player> players) { this.players = players; }
}