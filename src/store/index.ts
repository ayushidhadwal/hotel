import {configureStore} from '@reduxjs/toolkit';

import {rootReducer} from './rootReducer';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export const store = configureStore({reducer: rootReducer});

export type RootState = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
