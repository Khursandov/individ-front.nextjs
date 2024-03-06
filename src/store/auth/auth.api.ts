import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery, tagTypes } from '../../core/api/api.settings';
import { IBaseResponse } from '../../core/api/api.base.interface';
import { ILogin, ILoginResponse } from './auth.interface';
import { IUSer } from '../../core/types/user.interface';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery,
  tagTypes,
  endpoints: (builder) => ({
    login: builder.mutation<Promise<IBaseResponse<ILoginResponse>>, ILogin>({
      query: (data) => ({
        url: '/auth/login',
        method: 'POST',
        body: data,
      }),
      transformErrorResponse: (response) => response.data,
    }),

    resetPassword: builder.mutation({
      query: (email: string) => ({
        url: '/recovery/password',
        method: 'POST',
        body: { email },
      }),
    }),

    getMe: builder.query<IBaseResponse<IUSer>, void>({
      query: () => '/auth/profile',
    }),

    logOut: builder.mutation({
      query: () => ({
        url: '/auth/log-out',
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useGetMeQuery,
  useResetPasswordMutation,
  // useRecoveryPasswordMutation,
  useLogOutMutation,
  // useChangeProfilPasswordMutation,
  // useChangeProfileAvatarMutation,
  // useEditProfileMutation,
} = authApi;
