import api from './api';

export const tablesService = {
  getAllLeagues: () => api.get('/leagues'),
  getStandingsByLeague: (leagueId) => api.get(`/clubs/league/${leagueId}/standings`),
};
