import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


import { ApiEndpoints } from '../ApiEndpoints';
import { Axios } from '../../lib/Axios';

import { updatePasswordPayload } from '../auth/types';
import { store } from '../index';

export const UPDATE_PROFILE = '/api/update-profile';
export const USER_CHANGE_PASSWORD = '/api/user-update-password';
export const SEND_FEEDBACK = '/api/post-feedback';


export const userUpdatePassword = createAsyncThunk(
    '/api/update-password',
    async (
        { password, confirmPassword }: updatePasswordPayload,
        { rejectWithValue, fulfillWithValue },
    ) => {
        const result = await Axios.post(
            ApiEndpoints.updatePassword,
            {
                new_password: password,
                confirm_password: confirmPassword,
            },
        );

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

export const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {},
});

export const { } = userSlice.actions;

export default userSlice.reducer;
