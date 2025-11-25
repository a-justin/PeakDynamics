import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Box,
  Tabs,
  Tab,
  Grid,
  Alert,
  CircularProgress,
  Card,
  CardContent
} from '@mui/material';
import { fixturesService } from '../services/fixturesService';
import { tablesService } from '../services/tablesService';
import MatchCard from '../components/MatchCard';

const Fixtures = () => {
  const [fixtures, setFixtures] = useState([]);
  const [leagues, setLeagues] = useState([]);
  const [selectedLeague, setSelectedLeague] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const [fixturesResponse, leaguesResponse] = await Promise.all([
          fixturesService.getFixtures(),
          tablesService.getAllLeagues(),
        ]);

        if (Array.isArray(fixturesResponse.data)) {
          setFixtures(fixturesResponse.data);
        } else {
          setFixtures([]);
        }

        if (Array.isArray(leaguesResponse.data)) {
          setLeagues(leaguesResponse.data);
        } else {
          setLeagues([]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to load data. Please try again later.');
        setFixtures([]);
        setLeagues([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredFixtures = selectedLeague === 'all'
    ? fixtures
    : fixtures.filter(match =>
        match.homeTeam?.league?.id === selectedLeague ||
        match.awayTeam?.league?.id === selectedLeague
      );

  const groupFixturesByDate = (matches) => {
    const grouped = {};
    matches.forEach(match => {
      const date = new Date(match.matchDate).toLocaleDateString();
      if (!grouped[date]) {
        grouped[date] = [];
      }
      grouped[date].push(match);
    });
    return grouped;
  };

  const groupedFixtures = groupFixturesByDate(filteredFixtures);

  if (loading) {
    return (
      <Container maxWidth="xl">
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="xl">
        <Alert severity="error" sx={{ mt: 3 }}>
          {error}
        </Alert>
      </Container>
    );
  }

  return (
    <Container maxWidth="xl">
      <Typography variant="h3" gutterBottom sx={{ mt: 3, mb: 3 }}>
        Fixtures
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs
          value={selectedLeague}
          onChange={(event, newValue) => setSelectedLeague(newValue)}
        >
          <Tab label="All Leagues" value="all" />
          {leagues.map((league) => {
            const leagueLogoPath=`assets/logos/${league.name.toLowerCase().replace(/ /g, '-')}.png`;
            return (
              <Tab
                key={league.id}
                label={
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <img src={leagueLogoPath} alt={league.name} style={{ width: 24, height: 24, marginRight: 8 }}
                    onError={(e) => {e.target.style.display = 'none';}} />
                    {league.name}
                  </Box>
                }
                value={league.id}
              />
            );
          })}
        </Tabs>
      </Box>

      {Object.keys(groupedFixtures).length === 0 ? (
        <Card>
          <CardContent>
            <Typography variant="h6" align="center">
              No upcoming fixtures
            </Typography>
          </CardContent>
        </Card>
      ) : (
        Object.entries(groupedFixtures).map(([date, matches]) => (
          <Box key={date} sx={{ mb: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ mb: 2, color: 'primary.main' }}>
              {date}
            </Typography>
            <Grid container spacing={2}>
              {matches.map((match) => (
                <Grid item xs={12} md={6} key={match.id}>
                  <MatchCard match={match} />
                </Grid>
              ))}
            </Grid>
          </Box>
        ))
      )}
    </Container>
  );
};

export default Fixtures;