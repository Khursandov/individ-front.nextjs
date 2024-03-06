import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HOST_API_KEY } from '../../config-global';

export const baseQuery = fetchBaseQuery({
  baseUrl: HOST_API_KEY,
  prepareHeaders(headers) {
    return headers;
  },
  credentials: 'include',
  headers: {
    'x-lang': 'en',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Y2U2MmE0ZjUwMDE5YzIyOThmNGM2MCIsInBob25lIjoiMzE1MTkyMTciLCJpYXQiOjE3MDk2NTc3NjcsImV4cCI6MTcxMDI2MjU2N30.DreaAeK5W1NcaJtQumIvkUCkxS4YfsMmw7EZZem67t4',
  },
});

export const tagTypes = ['Permission', 'Role', 'Admins', 'Organizations', 'Branches', 'Users'];
