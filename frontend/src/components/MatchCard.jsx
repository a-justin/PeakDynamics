import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Grid,
} from '@mui/material';
import StadiumIcon from '@mui/icons-material/Stadium';
import ScheduleIcon from '@mui/icons-material/Schedule';

const MatchCard = ({ match }) => {
  // Add defensive checks for potentially undefined properties
  const homeTeamName = match?.homeTeam?.name || 'Unknown Team';
  const awayTeamName = match?.awayTeam?.name || 'Unknown Team';
  const homeTeamScore = match?.homeTeamScore ?? 0;
  const awayTeamScore = match?.awayTeamScore ?? 0;
  const stadium = match?.stadium || 'Unknown Stadium';
  const status = match?.status || 'UNKNOWN';
  const matchDate = match?.matchDate ? new Date(match.matchDate) : new Date();

  const getStatusColor = (status) => {
    switch (status) {
      case 'SCHEDULED':
        return 'primary';
      case 'FT':
        return 'success';
      case 'POSTPONED':
        return 'error';
      default:
        return 'default';
    }
  };

  return (
    <Card className="match-card" sx={{ mb: 2 }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Chip
            icon={<ScheduleIcon />}
            label={status}
            color={getStatusColor(status)}
            size="small"
          />
          <Typography variant="body2" color="text.secondary">
            {matchDate.toLocaleDateString()}
          </Typography>
        </Box>

        <Grid container spacing={2} alignItems="center">
          <Grid item xs={5} sx={{ textAlign: 'right' }}>
            <Typography variant="h6">{homeTeamName}</Typography>
          </Grid>
          <Grid item xs={2} sx={{ textAlign: 'center' }}>
            <Box
              sx={{
                px: 2,
                py: 1,
                backgroundColor: 'primary.main',
                color: 'white',
                borderRadius: 2,
                fontWeight: 'bold',
              }}
            >
              {homeTeamScore} - {awayTeamScore}
            </Box>
          </Grid>
          <Grid item xs={5} sx={{ textAlign: 'left' }}>
            <Typography variant="h6">{awayTeamName}</Typography>
          </Grid>
        </Grid>

        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2, gap: 1 }}>
          <StadiumIcon fontSize="small" color="action" />
          <Typography variant="body2" color="text.secondary">
            {stadium}
          </Typography>
          <ScheduleIcon fontSize="small" color="action" sx={{ ml: 2 }} />
          <Typography variant="body2" color="text.secondary">
            {matchDate.toLocaleTimeString()}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MatchCard;