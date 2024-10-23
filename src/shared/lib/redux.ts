/* eslint-disable no-undef */
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import type { RootState } from '@/app/root-store';


type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector