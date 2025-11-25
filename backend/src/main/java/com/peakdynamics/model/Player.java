package com.peakdynamics.model;

import jakarta.persistence.*;

@Entity
@Table(name = "players")
public class Player {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String position;

    @Column(nullable = false)
    private int jerseyNumber;

    // Many-to-One with Club
    @ManyToOne
    @JoinColumn(name = "club_id", nullable = false)
    private Club club;

    // Constructors
    public Player() {}

    public Player(String name, String position, int jerseyNumber, Club club) {
        this.name = name;
        this.position = position;
        this.jerseyNumber = jerseyNumber;
        this.club = club;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getPosition() { return position; }
    public void setPosition(String position) { this.position = position; }

    public int getJerseyNumber() { return jerseyNumber; }
    public void setJerseyNumber(int jerseyNumber) { this.jerseyNumber = jerseyNumber; }

    public Club getClub() { return club; }
    public void setClub(Club club) { this.club = club; }
}