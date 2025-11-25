package com.peakdynamics.dto;

public class ClubStandingDTO {
    private String clubName;
    private int played;
    private int won;
    private int drawn;
    private int lost;
    private int gf;
    private int ga;
    private int gd;
    private int points;

    // constructor
    public ClubStandingDTO(Long id, String clubName, int played, int won, int drawn, int lost, int gf, int ga, int gd, int points) {
        this.clubName = clubName;
        this.played = played;
        this.won = won;
        this.drawn = drawn;
        this.lost = lost;
        this.gf = gf;
        this.ga = ga;
        this.gd = gd;
        this.points = points;
    }

    // getters and setters (or use Lombok if you have it)
    public String getClubName() { return clubName; }
    public void setClubName(String clubName) { this.clubName= clubName; }
    public int getPlayed() { return played; }
    public void setPlayed(int played) { this.played = played; }
    public int getWon() { return won; }
    public void setWon(int won) { this.won = won; }
    public int getDrawn() { return drawn; }
    public void setDrawn(int drawn) { this.drawn = drawn; }
    public int getLost() { return lost; }
    public void setLost(int lost) { this.lost = lost; }
    public int getGf() { return gf; }
    public void setGf(int gf) { this.gf = gf; }
    public int getGa() { return ga; }
    public void setGa(int ga) { this.ga = ga; }
    public int getGd() { return gd; }
    public void setGd(int gd) { this.gd = gd; }
    public int getPoints() { return points; }
    public void setPoints(int points) { this.points = points; }
}

