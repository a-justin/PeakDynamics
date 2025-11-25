import api from './api';

export const newsService = {
  getAllNews: () => api.get('/news'),
  getNewsById: (id) => api.get(`/news/${id}`),
  getNewsByClub: (clubId) => api.get(`/news/club/${clubId}`),
  getLatestNews: () => api.get('/news/latest'),
};