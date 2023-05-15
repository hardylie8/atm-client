import { createAsyncThunk } from "@reduxjs/toolkit";
import { getToken, removeToken, setToken } from "../../utils/HelperFunctions";
import api from "../../services/api";
import history from "../../utils/history";

export const fetchUserData = createAsyncThunk(
  "api/fetchUserData",
  async (_, { rejectWithValue }) => {
    try {
      const accessToken = getToken();
      api.defaults.headers.Authorization = `Bearer ${accessToken}`;
      const response = await api.get("/api/user");
      return { ...response.data, accessToken };
    } catch (e) {
      removeToken();
      return rejectWithValue("");
    }
  }
);

export const login = createAsyncThunk("api/login", async (payload) => {
  const response = await api.post("/api/login", payload);
  setToken(response.data.authorisation.token);
  history.push("/home");
  return response.data;
});

export const signOut = createAsyncThunk("api/signOut", async () => {
  removeToken();
});
