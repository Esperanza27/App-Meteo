import { createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = "17945c47c483847f73889aaad31ff613";
const coord = { lon: 12.4839, lat: 41.8947 };

const weatherThunk = createAsyncThunk(
  "weather/get",
  async (payload, thunkApi) => {
    console.log("weatherThunk", payload);

    const { id = "Roma" } = payload;
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${id},it&APPID=${API_KEY}`
    );

    if (response.status === 400) {
      return thunkApi.rejectWithValue(await response.json());
    }

    return await response.json();
  }
);

const forecastThunk = createAsyncThunk(
  "forecast/get",
  async (payload, thunkApi) => {
    /* const { id = '' } = payload */
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${coord.lat}&lon=${coord.lon}&appid=${API_KEY}&units=metric`,
      {
        method: "GET",
      }
    );
    if (response.status === 400) {
      // Return the known error for future handling
      return thunkApi.rejectWithValue(await response.json());
    }
    return await response.json();
  }
);

export { weatherThunk, forecastThunk };
