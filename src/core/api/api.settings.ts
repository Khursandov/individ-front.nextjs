import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HOST_API_KEY } from '../../config-global';
import localStorageAvailable from '../../utils/localStorageAvailable';

const storageAvailable = localStorageAvailable();

const accessToken = storageAvailable ? localStorage.getItem('accessToken') : '';
export const baseQuery = fetchBaseQuery({
  baseUrl: HOST_API_KEY,
  prepareHeaders(headers) {
    return headers;
  },
  credentials: 'include',
  headers: {
    'x-lang': 'en',
    Authorization: `Bearer ${accessToken}`,
  },
});

export const tagTypes = ['Permission', 'Role', 'Admins', 'Organizations', 'Branches', 'Users'];
