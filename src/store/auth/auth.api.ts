import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery, tagTypes } from '../../core/api/api.settings';
import { IBaseResponse } from '../../core/api/api.base.interface';
import { ILogin, ILoginResponse } from './auth.interface';
// import { IBaseResponse } from 'core/api/api.base.interface';
// import { baseQuery, tagTypes } from 'core/api/api.settings';
// import { ILogin, IAuthResponse, IRecoveryPassword, IProfileChangePassword } from 'store/auth/auth.interface'
// import { IAdmin } from 'store/sensitive/admins/admin.interface'

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

    getMe: builder.query<IBaseResponse<any>, void>({
      query: () => '/auth/profile',
    }),

    // recoveryPassword: builder.mutation({
    //   query: (payload: {data: IRecoveryPassword, token: string}) => ({
    //     url: `recovery/password/verify/${payload.token}`,
    //     method: 'POST',
    //     body: payload.data,
    //   })
    // }),
    logOut: builder.mutation({
      query: () => ({
        url: '/auth/log-out',
        method: 'POST',
      }),
    }),
    // changeProfilPassword: builder.mutation({
    //   query: (payload: IProfileChangePassword) => ({
    //     url: 'profile/password',
    //     method: 'PATCH',
    //     body: payload,
    //   })
    // }),
    // editProfile: builder.mutation({
    //   query: (payload: any) => ({
    //     url: 'profile',
    //     method: 'POST',
    //     body: payload,
    //   })
    // }),
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
