import { createSlice } from '@reduxjs/toolkit';
import {weatherThunk, forecastThunk} from './meteoThunks';

const initialState = {
  value: 0,
  weather: [],
  forecast: [],
  error: null
}

export const meteoSlice = createSlice({
  name: 'meteo',
  initialState,
  reducers: {
    increment: (state) => {

      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
  extraReducers: (builder) => {

    builder.addCase(weatherThunk.fulfilled, (state, { payload }) => {
      state.weather = payload
      console.log(payload);

    })
    builder.addCase(weatherThunk.rejected, (state, action) => {
      if (action.payload) {
        // Since we passed in `MyKnownError` to `rejectValue` in `updateUser`, the type information will be available here.
        state.error = action.payload.errorMessage
      } else {
        state.error = action.error
      }
    }),

    builder.addCase(forecastThunk.fulfilled, (state, { payload }) => {
        state.forecast = payload
  
      })
      builder.addCase(forecastThunk.rejected, (state, action) => {
        if (action.payload) {
          // Since we passed in `MyKnownError` to `rejectValue` in `updateUser`, the type information will be available here.
          state.error = action.payload.errorMessage
        } else {
          state.error = action.error
        }
      })


  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = meteoSlice.actions

export default meteoSlice.reducer