import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authServices from "../../services/auth.services";

export const register = createAsyncThunk('@user/register', async (payload) => {
  const res = authServices.register(payload);
  return res;
});

export const login = createAsyncThunk('@user/login', async (payload) => {
  const res = authServices.login(payload);
  return res;
});