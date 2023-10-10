import { createSlice } from "@reduxjs/toolkit";
import data from "./data";

const randomInitialQuote = data[Math.floor(Math.random() * data.length)];

const initialState = {
  text: randomInitialQuote.text,
  author: randomInitialQuote.author.split(",")[0]
};

export const quoteSlice = createSlice({
  name: 'quote',
  initialState,
  reducers: {
    switchReducer: (state) => {
      const randomQuote = data[Math.floor(Math.random() * data.length)];
      state.text = randomQuote.text;
      state.author = randomQuote.author.split(",")[0];
    }
  }
});

export const { switchReducer } = quoteSlice.actions;

//* Exporting the reducer to be used inside the store
export default quoteSlice.reducer;
