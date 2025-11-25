import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Grid, 
  Typography, 
  Card, 
  CardContent,
  Alert,
  CircularProgress,
  Box 
} from '@mui/material';
import { newsService } from '../services/newsService';
import NewsCard from '../components/NewsCard';

const News = () => {
  const [news, setNews] = useState([]); // Initialize as empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await newsService.getAllNews();
        
        // Check if response data is an array before setting state
        if (Array.isArray(response.data)) {
          setNews(response.data);
        } else {
          setNews([]); // Set to empty array if not an array
          setError('Invalid data format received from server');
        }
      } catch (error) {
        console.error('Error fetching news:', error);
        setError('Failed to load news. Please try again later.');
        setNews([]); // Ensure it's always an array
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
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
      <Typography variant="h3" gutterBottom sx={{ mt: 3, mb: 4 }}>
        Football News
      </Typography>
      
      {news.length === 0 ? (
        <Card>
          <CardContent>
            <Typography align="center">No news articles available</Typography>
          </CardContent>
        </Card>
      ) : (
        <Grid container spacing={3}>
          {news.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <NewsCard news={item} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default News;