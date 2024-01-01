import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { ApiEndpoints } from '../ApiEndpoints';
import { Axios } from '../../lib/Axios';
import { AuthSliceState, LoginPayload, OtpPayload, RegisterPayload } from './types';
import Config from '../../config';
import { load, remove, save } from '../../utils/storage';

export const AUTH_LOGOUT = '/api/logout';

const createSession = async (payload: {
  userId: number | null;
  token: string | null;
  msg: string;
}) => {
  await save(Config.USER_SESSION, payload);
};

export const login = createAsyncThunk(
  '/auth/login',
  async (
    { phone, password }: LoginPayload,
    { rejectWithValue, fulfillWithValue },
  ) => {
    const result = await Axios.post(ApiEndpoints.login, {
      phone: phone,
      password: password,
    });

    const response = result.data;

    if (response.status === 'success') {
      const success = {
        userId: response.data.user.id,
        token: response.data.token,
        msg: response.msg,
      };

      await createSession(success); // save session to async storage

      return fulfillWithValue(success);
    } else {
      return rejectWithValue({
        message: result.data.msg
      });
    }
  },
);

export const register = createAsyncThunk(
  '/auth/register',
  async (
    { name, email, phone, password }: RegisterPayload,
    { rejectWithValue, fulfillWithValue },
  ) => {
    const result = await Axios.post(ApiEndpoints.register, {
      phone: phone,
      password: password,
      name: name,
      email: email
    });

    if (result.data.status === 'success') {
      const success = {
        otp: result.data.data.otp,
        msg: result.data.msg,
      };

      return fulfillWithValue(success);
    } else {
      return rejectWithValue(result.data.message);
    }
  },
);

export const logout = createAsyncThunk(
  AUTH_LOGOUT,
  async (_, { rejectWithValue, fulfillWithValue }) => {
    const result = await Axios.get(ApiEndpoints.logout);
    if (result.data.status === 'success') {
      await remove(Config.USER_SESSION);
      return fulfillWithValue(result.data.msg as string);
    }

    return rejectWithValue({
      message: result.data.msg
    });
  },
);

export const verifyOtp = createAsyncThunk(
  '/api/verify',
  async (
    { otp, phone, verifyFor}: OtpPayload,
    { rejectWithValue, fulfillWithValue },
  ) => {
    const result = await Axios.post(ApiEndpoints.verifyUser, {

      otp: otp,
      phone: phone,
      verify_for: verifyFor,
    });

    if (result.data.status === 'success') {
      const success = {
        msg: result.data.msg

      }

      return fulfillWithValue(success);
    } else {
      return rejectWithValue(result.data.msg);
    }
  },
);

// export const resendOTP = createAsyncThunk(
//   'resend-otp',
//   async ({ phone }: { phone: string }, { rejectWithValue }) => {
//     const result = await Axios.post(ApiEndpoints.resendOtp, {
//       phone: phone,
//       // verification_for: VerificationFor.FORGET_PASSWORD,
//     });
//     if (result.data.status === 'success') {

//       return true;
//     } else {
//       return rejectWithValue(result.data.msg);
//     }
//   },
// );

export const forgotPassword = createAsyncThunk(
  'forgot-password',
  async ({ phone }: { phone: string }, { rejectWithValue, fulfillWithValue }) => {
    const result = await Axios.post(ApiEndpoints.forgotPassword, {
      phone: phone,
    })
    if (result.data.status === 'success') {
      const success = {
        msg: result.data.msg
      }

      return fulfillWithValue(success)
    }
    else { return rejectWithValue(result.data.msg) }
  }
)


const initialState: AuthSliceState = {
  token: null,
  language: 'en',
  userId: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(login.fulfilled, (state, action) => {
      // state.userId = action.payload.userId;
      state.token = action.payload.token;
    });
  },
});

export const { } = authSlice.actions;

export default authSlice.reducer;
