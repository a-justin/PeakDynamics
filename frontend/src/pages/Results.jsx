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
import { resultsService } from '../services/resultsService';
import { tablesService } from '../services/tablesService';
import MatchCard from '../components/MatchCard';

const Results = () => {
  const [results, setResults] = useState([]);
  const [leagues, setLeagues] = useState([]);
  const [selectedLeague, setSelectedLeague] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const [resultsResponse, leaguesResponse] = await Promise.all([
          resultsService.getResults(),
          tablesService.getAllLeagues(),
        ]);

        if (Array.isArray(resultsResponse.data)) {
          setResults(resultsResponse.data);
        } else {
          setResults([]);
        }

        if (Array.isArray(leaguesResponse.data)) {
          setLeagues(leaguesResponse.data);
        } else {
          setLeagues([]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to load data. Please try again later.');
        setResults([]);
        setLeagues([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredResults = selectedLeague === 'all'
    ? results
    : results.filter(match =>
        match.homeTeam?.league?.id === selectedLeague ||
        match.awayTeam?.league?.id === selectedLeague
      );

  const groupResultsByDate = (matches) => {
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

  const groupedResults = groupResultsByDate(filteredResults);

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
        Results
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
                label={<Box sx={{ display: 'flex', alignItems: 'center' }}>
                 <img
                    src={`/assets/logos/${league.name.toLowerCase().replace(/\s+/g, '-')}.png`}
                    alt={league.name}
                    className="league-logo"
                    onError={(e) => {
                  e.target.style.display = 'none';
                      }}
                    />
                {league.name}
                </Box>}
                value={league.id}
              />
            );
          })}
        </Tabs>
      </Box>

      {Object.keys(groupedResults).length === 0 ? (
        <Card>
          <CardContent>
            <Typography variant="h6" align="center">
              No recent results
            </Typography>
          </CardContent>
        </Card>
      ) : (
        Object.entries(groupedResults).map(([date, matches]) => (
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

export default Results;