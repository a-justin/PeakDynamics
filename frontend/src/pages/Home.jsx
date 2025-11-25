import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  Alert,
  CircularProgress,
} from '@mui/material';
import { newsService } from '../services/newsService';
import { fixturesService } from '../services/fixturesService';
import NewsCard from '../components/NewsCard';
import MatchCard from '../components/MatchCard';

const Home = () => {
  const [latestNews, setLatestNews] = useState([]); // Initialize as empty array
  const [upcomingFixtures, setUpcomingFixtures] = useState([]); // Initialize as empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const [newsResponse, fixturesResponse] = await Promise.all([
          newsService.getLatestNews(),
          fixturesService.getFixtures(),
        ]);
        
        // Check if response data is an array before setting state
        if (Array.isArray(newsResponse.data)) {
          setLatestNews(newsResponse.data);
        } else {
          setLatestNews([]); // Set to empty array if not an array
        }
        
        if (Array.isArray(fixturesResponse.data)) {
          setUpcomingFixtures(fixturesResponse.data.slice(0, 3));
        } else {
          setUpcomingFixtures([]); // Set to empty array if not an array
        }
        
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to load data. Please try again later.');
        setLatestNews([]); // Ensure it's always an array
        setUpcomingFixtures([]); // Ensure it's always an array
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
      {/* Hero Section */}
      <Box className="hero-section">
        <Typography variant="h1" gutterBottom>
          PEAKDYNAMICS
        </Typography>
        <Typography variant="h5">
          Your ultimate source for top football leagues and clubs
        </Typography>
      </Box>

      <Grid container spacing={4} sx={{ mt: 2, mb: 4 }}>
        {/* Latest News */}
        <Grid item xs={12} md={8}>
          <Typography variant="h4" gutterBottom>
            Latest News
          </Typography>
          {latestNews.length === 0 ? (
            <Card>
              <CardContent>
                <Typography>No news available</Typography>
              </CardContent>
            </Card>
          ) : (
            <Grid container spacing={3}>
              {latestNews.map((news) => (
                <Grid item xs={12} sm={6} key={news.id}>
                  <NewsCard news={news} />
                </Grid>
              ))}
            </Grid>
          )}
        </Grid>

        {/* Upcoming Fixtures */}
        <Grid item xs={12} md={4}>
          <Typography variant="h4" gutterBottom>
            Upcoming Fixtures
          </Typography>
          {upcomingFixtures.length === 0 ? (
            <Card>
              <CardContent>
                <Typography>No upcoming fixtures</Typography>
              </CardContent>
            </Card>
          ) : (
            upcomingFixtures.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;