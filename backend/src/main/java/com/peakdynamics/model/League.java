package com.peakdynamics.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "leagues")
public class League {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String name;

    @Column(nullable = false)
    private String country;

    // One-to-Many with Club
    @OneToMany(mappedBy = "league", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Club> clubs;

    // Constructors
    public League() {}

    public League(String name, String country) {
        this.name = name;
        this.country = country;
    }



    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getCountry() { return country; }
    public void setCountry(String country) { this.country = country; }

    public List<Club> getClubs() { return clubs; }
    public void setClubs(List<Club> clubs) { this.clubs = clubs; }
}