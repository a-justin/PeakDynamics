import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableContainer,
  Paper,
  Box,
  Tabs,
  Tab,
  Alert,
  CircularProgress,
  TableCell,
  TableRow
} from '@mui/material';
import { tablesService } from '../services/tablesService';
import TableRowComponent from '../components/TableRow';

const Tables = () => {
  const [leagues, setLeagues] = useState([]);
  const [clubs, setClubs] = useState([]);
  const [selectedLeague, setSelectedLeague] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch clubs for a league
  const fetchClubs = async (leagueId) => {
    try {
      const response = await tablesService.getStandingsByLeague(leagueId);
      if (Array.isArray(response.data)) {
        setClubs(response.data);
      } else {
        setClubs([]);
      }
    } catch (err) {
      console.error('Error fetching clubs:', err);
      setClubs([]);
    }
  };

  // Fetch leagues and initial clubs
  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const leaguesResponse = await tablesService.getAllLeagues();

      if (Array.isArray(leaguesResponse.data)) {
        setLeagues(leaguesResponse.data);
        if (leaguesResponse.data.length > 0) {
          const firstLeague = leaguesResponse.data[0];
          setSelectedLeague(firstLeague);
          await fetchClubs(firstLeague.id);
        }
      } else {
        setLeagues([]);
      }
    } catch (err) {
      console.error('Error fetching data:', err);
      setError('Failed to load data. Please try again later.');
      setLeagues([]);
      setClubs([]);
    } finally {
      setLoading(false);
    }
  };

  // Run on mount
  useEffect(() => {
    fetchData();
  }, []);

  // League tab change
  const handleLeagueChange = async (event, newValue) => {
    const league = leagues[newValue];
    setSelectedLeague(league);
    setClubs([]); 
    await fetchClubs(league.id);
  };

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
        League Tables
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs value={leagues.findIndex(l => l.id === selectedLeague?.id)} onChange={handleLeagueChange}>
          {leagues.map((league) => (
            <Tab
              key={league.id}
              label={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <img
                    src={`/assets/logos/${league.name.toLowerCase().replace(/\s+/g, '-')}.png`}
                    alt={league.name}
                    className="league-logo"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                  {league.name}
                </Box>
              }
            />
          ))}
        </Tabs>
      </Box>

      {selectedLeague && (
        <TableContainer component={Paper}>
          <Table className="league-table">
            <TableHead>
              <TableRow>
                <TableCell>Pos</TableCell>
                <TableCell>Club</TableCell>
                <TableCell align="center">PL</TableCell>
                <TableCell align="center">W</TableCell>
                <TableCell align="center">D</TableCell>
                <TableCell align="center">L</TableCell>
                <TableCell align="center">GF</TableCell>
                <TableCell align="center">GA</TableCell>
                <TableCell align="center">GD</TableCell>
                <TableCell align="center">Pts</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {clubs.map((club, index) => (
                <TableRowComponent key={club.id} club={club} index={index} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
};

export default Tables;
