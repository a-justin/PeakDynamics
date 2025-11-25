import React from 'react';
import { TableRow, TableCell, Box } from '@mui/material';

const TableRowComponent = ({ club, index }) => {
  // Directly use values from the DTO
  
  const {
    played,
    won,
    drawn,
    lost,
    gf,
    ga,
    gd,
    points
  } = club;

  return (
    <TableRow>
      {/* Position */}
      <TableCell>{index + 1}</TableCell>

      {/* Club Name + Logo */}
      <TableCell>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={`/assets/logos/${club.clubName.toLowerCase().replace(/\s+/g, '-')}.png`}
            alt={club.clubName}
            className="team-logo"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          {club.clubName}
        </Box>
      </TableCell>

      {/* Stats */}
      <TableCell align="center">{played}</TableCell>
      <TableCell align="center">{won}</TableCell>
      <TableCell align="center">{drawn}</TableCell>
      <TableCell align="center">{lost}</TableCell>
      <TableCell align="center">{gf}</TableCell>
      <TableCell align="center">{ga}</TableCell>
      <TableCell align="center">{gd}</TableCell>
      <TableCell align="center" sx={{ fontWeight: 'bold' }}>{points}</TableCell>
    </TableRow>
  );
};

export default TableRowComponent;
