-- Insert Leagues
INSERT IGNORE INTO leagues (name, country) VALUES
('Premier League', 'England'),
('La Liga', 'Spain'),
('Serie A', 'Italy'),
('Bundesliga', 'Germany'),
('Ligue 1', 'France');

-- Insert Clubs for Premier League with realistic points
INSERT IGNORE INTO clubs (name, stadium, league_id) VALUES
('Manchester City', 'Etihad Stadium', (SELECT id FROM leagues WHERE name = 'Premier League')),
('Liverpool', 'Anfield', (SELECT id FROM leagues WHERE name = 'Premier League')),
('Chelsea', 'Stamford Bridge', (SELECT id FROM leagues WHERE name = 'Premier League')),
('Arsenal', 'Emirates Stadium', (SELECT id FROM leagues WHERE name = 'Premier League')),
('Manchester United', 'Old Trafford', (SELECT id FROM leagues WHERE name = 'Premier League'));

-- Insert Clubs for La Liga
INSERT IGNORE INTO clubs (name, stadium, league_id) VALUES
('Real Madrid', 'Santiago Bernabéu', (SELECT id FROM leagues WHERE name = 'La Liga')),
('Barcelona', 'Camp Nou', (SELECT id FROM leagues WHERE name = 'La Liga')),
('Atletico Madrid', 'Cívitas Metropolitano', (SELECT id FROM leagues WHERE name = 'La Liga')),
('Sevilla', 'Ramón Sánchez Pizjuán', (SELECT id FROM leagues WHERE name = 'La Liga')),
('Valencia', 'Mestalla', (SELECT id FROM leagues WHERE name = 'La Liga'));

-- Insert Clubs for Serie A
INSERT IGNORE INTO clubs (name, stadium, league_id) VALUES
('Inter Milan', 'Giuseppe Meazza', (SELECT id FROM leagues WHERE name = 'Serie A')),
('AC Milan', 'Giuseppe Meazza', (SELECT id FROM leagues WHERE name = 'Serie A')),
('Juventus', 'Allianz Stadium', (SELECT id FROM leagues WHERE name = 'Serie A')),
('Napoli', 'Diego Armando Maradona', (SELECT id FROM leagues WHERE name = 'Serie A')),
('Roma', 'Stadio Olimpico', (SELECT id FROM leagues WHERE name = 'Serie A'));

-- Insert Clubs for Bundesliga
INSERT IGNORE INTO clubs (name, stadium, league_id) VALUES
('Bayern Munich', 'Allianz Arena', (SELECT id FROM leagues WHERE name = 'Bundesliga')),
('Borussia Dortmund', 'Signal Iduna Park', (SELECT id FROM leagues WHERE name = 'Bundesliga')),
('RB Leipzig', 'Red Bull Arena', (SELECT id FROM leagues WHERE name = 'Bundesliga')),
('Bayer Leverkusen', 'BayArena', (SELECT id FROM leagues WHERE name = 'Bundesliga')),
('Eintracht Frankfurt', 'Deutsche Bank Park', (SELECT id FROM leagues WHERE name = 'Bundesliga'));

-- Insert Clubs for Ligue 1
INSERT IGNORE INTO clubs (name, stadium, league_id) VALUES
('Paris Saint-Germain', 'Parc des Princes', (SELECT id FROM leagues WHERE name = 'Ligue 1')),
('Marseille', 'Orange Vélodrome', (SELECT id FROM leagues WHERE name = 'Ligue 1')),
('Lyon', 'Groupama Stadium', (SELECT id FROM leagues WHERE name = 'Ligue 1')),
('Monaco', 'Stade Louis II', (SELECT id FROM leagues WHERE name = 'Ligue 1')),
('Lille', 'Stade Pierre-Mauroy', (SELECT id FROM leagues WHERE name = 'Ligue 1'));

-- Sample Players for Various Clubs
INSERT IGNORE INTO players (name, position, jersey_number, club_id) VALUES
('Erling Haaland', 'Forward', 9, (SELECT id FROM clubs WHERE name = 'Manchester City')),
('Kevin De Bruyne', 'Midfielder', 17, (SELECT id FROM clubs WHERE name = 'Manchester City')),
('Ederson', 'Goalkeeper', 31, (SELECT id FROM clubs WHERE name = 'Manchester City')),
('Mohamed Salah', 'Forward', 11, (SELECT id FROM clubs WHERE name = 'Liverpool')),
('Virgil van Dijk', 'Defender', 4, (SELECT id FROM clubs WHERE name = 'Liverpool')),
('Karim Benzema', 'Forward', 9, (SELECT id FROM clubs WHERE name = 'Real Madrid')),
('Luka Modrić', 'Midfielder', 10, (SELECT id FROM clubs WHERE name = 'Real Madrid')),
('Thibaut Courtois', 'Goalkeeper', 1, (SELECT id FROM clubs WHERE name = 'Real Madrid')),
('Robert Lewandowski', 'Forward', 9, (SELECT id FROM clubs WHERE name = 'Barcelona')),
('Pedri', 'Midfielder', 8, (SELECT id FROM clubs WHERE name = 'Barcelona'));

-- Sample Completed Matches with realistic scores
INSERT IGNORE INTO matches (match_date, stadium, status, home_team_score, away_team_score, home_team_id, away_team_id) VALUES
('2024-05-18 16:30:00', 'Etihad Stadium', 'FT', 3, 1,
 (SELECT id FROM clubs WHERE name = 'Manchester City'),
 (SELECT id FROM clubs WHERE name = 'Manchester United')),

('2024-05-17 20:00:00', 'Anfield', 'FT', 2, 2,
 (SELECT id FROM clubs WHERE name = 'Liverpool'),
 (SELECT id FROM clubs WHERE name = 'Chelsea')),

('2024-05-16 19:45:00', 'Santiago Bernabéu', 'FT', 2, 4,
 (SELECT id FROM clubs WHERE name = 'Real Madrid'),
 (SELECT id FROM clubs WHERE name = 'Barcelona')),

('2024-05-15 18:30:00', 'Allianz Arena', 'FT', 3, 2,
 (SELECT id FROM clubs WHERE name = 'Bayern Munich'),
 (SELECT id FROM clubs WHERE name = 'Borussia Dortmund')),

('2024-05-14 17:00:00', 'Parc des Princes', 'FT', 1, 1,
 (SELECT id FROM clubs WHERE name = 'Paris Saint-Germain'),
 (SELECT id FROM clubs WHERE name = 'Marseille')),

 ('2024-04-12 15:00:00', 'Old Trafford', 'FT', 1, 0,
  (SELECT id FROM clubs WHERE name = 'Manchester United'),
  (SELECT id FROM clubs WHERE name = 'Chelsea')),

 ('2024-04-20 17:30:00', 'Emirates Stadium', 'FT', 2, 1,
  (SELECT id FROM clubs WHERE name = 'Arsenal'),
  (SELECT id FROM clubs WHERE name = 'Liverpool')),

 ('2024-04-28 16:00:00', 'Stamford Bridge', 'FT', 0, 2,
  (SELECT id FROM clubs WHERE name = 'Chelsea'),
  (SELECT id FROM clubs WHERE name = 'Manchester City')),

 ('2024-05-03 19:00:00', 'Anfield', 'FT', 3, 0,
  (SELECT id FROM clubs WHERE name = 'Liverpool'),
  (SELECT id FROM clubs WHERE name = 'Manchester United')),

 ('2024-05-10 18:00:00', 'Etihad Stadium', 'FT', 2, 2,
  (SELECT id FROM clubs WHERE name = 'Manchester City'),
  (SELECT id FROM clubs WHERE name = 'Arsenal')),

  ('2024-04-06 21:00:00', 'Camp Nou', 'FT', 4, 0,
   (SELECT id FROM clubs WHERE name = 'Barcelona'),
   (SELECT id FROM clubs WHERE name = 'Sevilla')),

  ('2024-04-15 20:00:00', 'Mestalla', 'FT', 2, 3,
   (SELECT id FROM clubs WHERE name = 'Valencia'),
   (SELECT id FROM clubs WHERE name = 'Real Madrid')),

  ('2024-04-22 19:30:00', 'Cívitas Metropolitano', 'FT', 2, 2,
   (SELECT id FROM clubs WHERE name = 'Atletico Madrid'),
   (SELECT id FROM clubs WHERE name = 'Barcelona')),

  ('2024-05-02 18:00:00', 'Santiago Bernabéu', 'FT', 1, 0,
   (SELECT id FROM clubs WHERE name = 'Real Madrid'),
   (SELECT id FROM clubs WHERE name = 'Atletico Madrid')),

  ('2024-05-08 17:00:00', 'Ramón Sánchez Pizjuán', 'FT', 3, 1,
   (SELECT id FROM clubs WHERE name = 'Sevilla'),
   (SELECT id FROM clubs WHERE name = 'Valencia')),

   ('2024-04-07 18:00:00', 'Allianz Stadium', 'FT', 2, 1,
    (SELECT id FROM clubs WHERE name = 'Juventus'),
    (SELECT id FROM clubs WHERE name = 'Roma')),

   ('2024-04-14 19:00:00', 'Diego Armando Maradona', 'FT', 3, 0,
    (SELECT id FROM clubs WHERE name = 'Napoli'),
    (SELECT id FROM clubs WHERE name = 'Inter Milan')),

   ('2024-04-21 20:00:00', 'Stadio Olimpico', 'FT', 1, 1,
    (SELECT id FROM clubs WHERE name = 'Roma'),
    (SELECT id FROM clubs WHERE name = 'AC Milan')),

   ('2024-05-01 17:30:00', 'Giuseppe Meazza', 'FT', 2, 2,
    (SELECT id FROM clubs WHERE name = 'Inter Milan'),
    (SELECT id FROM clubs WHERE name = 'Juventus')),

   ('2024-05-09 19:45:00', 'Allianz Stadium', 'FT', 1, 0,
    (SELECT id FROM clubs WHERE name = 'Juventus'),
    (SELECT id FROM clubs WHERE name = 'Napoli')),

    ('2024-04-03 18:30:00', 'BayArena', 'FT', 3, 2,
     (SELECT id FROM clubs WHERE name = 'Bayer Leverkusen'),
     (SELECT id FROM clubs WHERE name = 'RB Leipzig')),

    ('2024-04-10 19:00:00', 'Signal Iduna Park', 'FT', 2, 0,
     (SELECT id FROM clubs WHERE name = 'Borussia Dortmund'),
     (SELECT id FROM clubs WHERE name = 'Eintracht Frankfurt')),

    ('2024-04-18 20:00:00', 'Allianz Arena', 'FT', 1, 1,
     (SELECT id FROM clubs WHERE name = 'Bayern Munich'),
     (SELECT id FROM clubs WHERE name = 'RB Leipzig')),

    ('2024-05-04 16:00:00', 'Deutsche Bank Park', 'FT', 0, 3,
     (SELECT id FROM clubs WHERE name = 'Eintracht Frankfurt'),
     (SELECT id FROM clubs WHERE name = 'Bayern Munich')),

    ('2024-05-11 17:30:00', 'BayArena', 'FT', 2, 2,
     (SELECT id FROM clubs WHERE name = 'Bayer Leverkusen'),
     (SELECT id FROM clubs WHERE name = 'Borussia Dortmund')),

     ('2024-04-02 17:00:00', 'Groupama Stadium', 'FT', 2, 3,
      (SELECT id FROM clubs WHERE name = 'Lyon'),
      (SELECT id FROM clubs WHERE name = 'Paris Saint-Germain')),

     ('2024-04-10 20:00:00', 'Stade Pierre-Mauroy', 'FT', 1, 0,
      (SELECT id FROM clubs WHERE name = 'Lille'),
      (SELECT id FROM clubs WHERE name = 'Monaco')),

     ('2024-04-18 18:30:00', 'Orange Vélodrome', 'FT', 1, 1,
      (SELECT id FROM clubs WHERE name = 'Marseille'),
      (SELECT id FROM clubs WHERE name = 'Lyon')),

     ('2024-05-06 19:00:00', 'Parc des Princes', 'FT', 4, 2,
      (SELECT id FROM clubs WHERE name = 'Paris Saint-Germain'),
      (SELECT id FROM clubs WHERE name = 'Monaco')),

     ('2024-05-12 20:30:00', 'Stade Louis II', 'FT', 2, 2,
      (SELECT id FROM clubs WHERE name = 'Monaco'),
      (SELECT id FROM clubs WHERE name = 'Marseille'));

-- Sample Upcoming Matches
INSERT IGNORE INTO matches (match_date, stadium, status, home_team_score, away_team_score, home_team_id, away_team_id) VALUES
('2024-05-25 18:45:00', 'Wembley Stadium', 'SCHEDULED', 0, 0,
 (SELECT id FROM clubs WHERE name = 'Manchester City'),
 (SELECT id FROM clubs WHERE name = 'Chelsea')),

('2024-05-26 17:30:00', 'Camp Nou', 'SCHEDULED', 0, 0,
 (SELECT id FROM clubs WHERE name = 'Barcelona'),
 (SELECT id FROM clubs WHERE name = 'Atletico Madrid')),

('2024-05-27 19:00:00', 'Giuseppe Meazza', 'SCHEDULED', 0, 0,
 (SELECT id FROM clubs WHERE name = 'Inter Milan'),
 (SELECT id FROM clubs WHERE name = 'AC Milan')),

('2024-05-28 20:30:00', 'Signal Iduna Park', 'SCHEDULED', 0, 0,
 (SELECT id FROM clubs WHERE name = 'Borussia Dortmund'),
 (SELECT id FROM clubs WHERE name = 'RB Leipzig')),

 ('2024-06-01 20:00:00', 'Emirates Stadium', 'SCHEDULED', 0, 0,
  (SELECT id FROM clubs WHERE name = 'Arsenal'),
  (SELECT id FROM clubs WHERE name = 'Chelsea')),

 ('2024-06-07 18:30:00', 'Old Trafford', 'SCHEDULED', 0, 0,
  (SELECT id FROM clubs WHERE name = 'Manchester United'),
  (SELECT id FROM clubs WHERE name = 'Liverpool')),

 ('2024-06-10 16:00:00', 'Etihad Stadium', 'SCHEDULED', 0, 0,
  (SELECT id FROM clubs WHERE name = 'Manchester City'),
  (SELECT id FROM clubs WHERE name = 'Arsenal')),

  ('2024-06-05 19:00:00', 'Camp Nou', 'SCHEDULED', 0, 0,
   (SELECT id FROM clubs WHERE name = 'Barcelona'),
   (SELECT id FROM clubs WHERE name = 'Real Madrid')),

  ('2024-06-12 20:00:00', 'Cívitas Metropolitano', 'SCHEDULED', 0, 0,
   (SELECT id FROM clubs WHERE name = 'Atletico Madrid'),
   (SELECT id FROM clubs WHERE name = 'Sevilla')),

  ('2024-06-16 18:00:00', 'Mestalla', 'SCHEDULED', 0, 0,
   (SELECT id FROM clubs WHERE name = 'Valencia'),
   (SELECT id FROM clubs WHERE name = 'Barcelona')),

   ('2024-06-03 21:00:00', 'Stadio Olimpico', 'SCHEDULED', 0, 0,
    (SELECT id FROM clubs WHERE name = 'Roma'),
    (SELECT id FROM clubs WHERE name = 'Inter Milan')),

   ('2024-06-08 18:45:00', 'Giuseppe Meazza', 'SCHEDULED', 0, 0,
    (SELECT id FROM clubs WHERE name = 'AC Milan'),
    (SELECT id FROM clubs WHERE name = 'Napoli')),

   ('2024-06-14 20:00:00', 'Allianz Stadium', 'SCHEDULED', 0, 0,
    (SELECT id FROM clubs WHERE name = 'Juventus'),
    (SELECT id FROM clubs WHERE name = 'AC Milan')),

    ('2024-06-02 19:30:00', 'Allianz Arena', 'SCHEDULED', 0, 0,
     (SELECT id FROM clubs WHERE name = 'Bayern Munich'),
     (SELECT id FROM clubs WHERE name = 'Eintracht Frankfurt')),

    ('2024-06-09 18:00:00', 'Signal Iduna Park', 'SCHEDULED', 0, 0,
     (SELECT id FROM clubs WHERE name = 'Borussia Dortmund'),
     (SELECT id FROM clubs WHERE name = 'Bayer Leverkusen')),

    ('2024-06-13 20:00:00', 'Red Bull Arena', 'SCHEDULED', 0, 0,
     (SELECT id FROM clubs WHERE name = 'RB Leipzig'),
     (SELECT id FROM clubs WHERE name = 'Bayern Munich')),

     ('2024-06-04 19:45:00', 'Stade Pierre-Mauroy', 'SCHEDULED', 0, 0,
      (SELECT id FROM clubs WHERE name = 'Lille'),
      (SELECT id FROM clubs WHERE name = 'Paris Saint-Germain')),

     ('2024-06-10 18:00:00', 'Orange Vélodrome', 'SCHEDULED', 0, 0,
      (SELECT id FROM clubs WHERE name = 'Marseille'),
      (SELECT id FROM clubs WHERE name = 'Lille')),

     ('2024-06-15 20:00:00', 'Groupama Stadium', 'SCHEDULED', 0, 0,
      (SELECT id FROM clubs WHERE name = 'Lyon'),
      (SELECT id FROM clubs WHERE name = 'Monaco'));

-- Sample Transfers
INSERT IGNORE INTO transfers (transfer_date, transfer_fee, transfer_type, player_id, from_club_id, to_club_id) VALUES
('2023-07-15', 100.00, 'PERMANENT',
 (SELECT id FROM players WHERE name = 'Erling Haaland'),
 (SELECT id FROM clubs WHERE name = 'Borussia Dortmund'),
 (SELECT id FROM clubs WHERE name = 'Manchester City')),

('2023-08-01', 75.50, 'PERMANENT',
 (SELECT id FROM players WHERE name = 'Robert Lewandowski'),
 (SELECT id FROM clubs WHERE name = 'Bayern Munich'),
 (SELECT id FROM clubs WHERE name = 'Barcelona')),

('2024-01-15', 45.00, 'LOAN',
 (SELECT id FROM players WHERE name = 'Pedri'),
 (SELECT id FROM clubs WHERE name = 'Barcelona'),
 (SELECT id FROM clubs WHERE name = 'Bayern Munich'));

-- Sample News with correct image path
INSERT IGNORE INTO news (title, content, published_date, author, image_url, club_id) VALUES
('Champions League Final Preview', 'A thrilling clash is expected between Manchester City and Inter Milan this Saturday at Wembley Stadium. Both teams are in excellent form and will be looking to secure European glory.', NOW(), 'John Smith', '/assets/images/champions-final.jpg', (SELECT id FROM clubs WHERE name = 'Manchester City')),

('New Manager Appointed', 'FC Barcelona has officially announced the appointment of their new head coach for the upcoming season. The former club legend returns to lead the team.', NOW(), 'Anna Jones', NULL, (SELECT id FROM clubs WHERE name = 'Barcelona')),

('Derby Day Drama', 'The Milan derby lived up to its hype with a thrilling 2-2 draw. Both Inter and AC Milan showed why this is one of the most passionate rivalries in football.', NOW(), 'Marco Rossi', NULL, (SELECT id FROM clubs WHERE name = 'AC Milan')),

('Young Talent Signs Extension', 'The promising young midfielder has signed a 5-year contract extension, committing his future to the club amidst interest from top European teams.', NOW(), 'Sarah Wilson', NULL, (SELECT id FROM clubs WHERE name = 'Borussia Dortmund'));