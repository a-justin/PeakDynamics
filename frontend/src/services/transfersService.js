import api from './api';

export const transfersService = {
  getAllTransfers: () => api.get('/transfers'),
  getTransfersByClub: (clubId) => api.get(`/transfers/club/${clubId}`),
};