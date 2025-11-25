import api from './api';

export const fixturesService = {
  getFixtures: () => api.get('/matches/status/SCHEDULED'),
  getFixturesByClub: (clubId) => api.get(`/matches/club/${clubId}?status=SCHEDULED`),
};