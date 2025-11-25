import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
} from '@mui/material';
import ClubIcon from '@mui/icons-material/EmojiEvents';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';

const NewsCard = ({ news }) => {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {news.imageUrl && (
        <CardMedia
          component="img"
          height="140"
          image={news.imageUrl}
          alt={news.title}
        />
      )}
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="h3">
          {news.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {news.content.length > 150
            ? `${news.content.substring(0, 150)}...`
            : news.content}
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 'auto' }}>
          <Chip
            icon={<CalendarTodayIcon />}
            label={new Date(news.publishedDate).toLocaleDateString()}
            size="small"
            variant="outlined"
          />
          <Chip
            icon={<PersonIcon />}
            label={news.author}
            size="small"
            variant="outlined"
          />
          {news.club && (
            <Chip
              icon={<ClubIcon />}
              label={news.club.name}
              size="small"
              color="primary"
              variant="outlined"
            />
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default NewsCard;