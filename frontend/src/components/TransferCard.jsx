import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Grid,
} from '@mui/material';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const TransferCard = ({ transfer }) => {
  const formatFee = (fee) => {
    return `€${fee}M`;
  };

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Chip
            icon={<AttachMoneyIcon />}
            label={formatFee(transfer.transferFee)}
            color="primary"
            variant="outlined"
          />
          <Typography variant="body2" color="text.secondary">
            {new Date(transfer.transferDate).toLocaleDateString()}
          </Typography>
        </Box>

        <Grid container spacing={2} alignItems="center">
          <Grid item xs={5} sx={{ textAlign: 'right' }}>
            <Typography variant="subtitle1">{transfer.fromClub.name}</Typography>
          </Grid>
          <Grid item xs={2} sx={{ textAlign: 'center' }}>
            <SwapHorizIcon color="primary" fontSize="large" />
          </Grid>
          <Grid item xs={5} sx={{ textAlign: 'left' }}>
            <Typography variant="subtitle1">{transfer.toClub.name}</Typography>
          </Grid>
        </Grid>

        <Typography
          variant="h6"
          align="center"
          sx={{ mt: 2, fontWeight: 'bold', color: 'primary.main' }}
        >
          {transfer.player.name}
        </Typography>

        <Box sx={{ textAlign: 'center', mt: 1 }}>
          <Chip
            label={transfer.transferType}
            size="small"
            variant="outlined"
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default TransferCard;