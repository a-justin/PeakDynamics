import api from './api';

export const resultsService = {
  getResults: () => api.get('/matches/status/FT'),
  getResultsByClub: (clubId) => api.get(`/matches/club/${clubId}?status=FT`),
};