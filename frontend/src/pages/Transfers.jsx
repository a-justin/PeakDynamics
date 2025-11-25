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
import { transfersService } from '../services/transfersService';
import { tablesService } from '../services/tablesService';
import TransferCard from '../components/TransferCard';

const Transfers = () => {
  const [transfers, setTransfers] = useState([]);
  const [leagues, setLeagues] = useState([]);
  const [selectedLeague, setSelectedLeague] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const [transfersResponse, leaguesResponse] = await Promise.all([
          transfersService.getAllTransfers(),
          tablesService.getAllLeagues(),
        ]);

        if (Array.isArray(transfersResponse.data)) {
          setTransfers(transfersResponse.data);
        } else {
          setTransfers([]);
        }

        if (Array.isArray(leaguesResponse.data)) {
          setLeagues(leaguesResponse.data);
        } else {
          setLeagues([]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to load data. Please try again later.');
        setTransfers([]);
        setLeagues([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredTransfers = selectedLeague === 'all'
    ? transfers
    : transfers.filter(transfer =>
        transfer.fromClub?.league?.id === selectedLeague ||
        transfer.toClub?.league?.id === selectedLeague
      );

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
        Transfers
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs
          value={selectedLeague}
          onChange={(event, newValue) => setSelectedLeague(newValue)}
        >
          <Tab label="All Leagues" value="all" />
          {leagues.map((league) => (
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
          ))}
        </Tabs>
      </Box>

      {filteredTransfers.length === 0 ? (
        <Card>
          <CardContent>
            <Typography variant="h6" align="center">
              No transfer data available
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <Grid container spacing={2}>
          {filteredTransfers.map((transfer) => (
            <Grid item xs={12} md={6} lg={4} key={transfer.id}>
              <TransferCard transfer={transfer} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Transfers;