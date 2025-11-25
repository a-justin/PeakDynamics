package com.peakdynamics.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "news")
public class News {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 500)
    private String title;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String content;

    @Column(nullable = false)
    private LocalDateTime publishedDate;

    @Column(nullable = false)
    private String author;

    @Column
    private String imageUrl;

    // Many-to-One with Club (Optional, if news is club-specific)
    @ManyToOne
    @JoinColumn(name = "club_id")
    private Club club;

    // Constructors
    public News() {}

    public News(String title, String content, LocalDateTime publishedDate, String author, String imageUrl, Club club) {
        this.title = title;
        this.content = content;
        this.publishedDate = publishedDate;
        this.author = author;
        this.imageUrl = imageUrl;
        this.club = club;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getContent() { return content; }
    public void setContent(String content) { this.content = content; }

    public LocalDateTime getPublishedDate() { return publishedDate; }
    public void setPublishedDate(LocalDateTime publishedDate) { this.publishedDate = publishedDate; }

    public String getAuthor() { return author; }
    public void setAuthor(String author) { this.author = author; }

    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }

    public Club getClub() { return club; }
    public void setClub(Club club) { this.club = club; }
}