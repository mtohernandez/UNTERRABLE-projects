import { createSlice } from "@reduxjs/toolkit";
import { evaluate } from "mathjs";
import evaluateCatch from "./utils/evaluateCatch";

const initialState = {
  query: "0",
  result: "0",
  numbers: {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  },
  symbols: {
    add: "+",
    substract: "-",
    multiply: "x",
    divide: "%",
  },
  actions: {
    decimal: ".",
    clear: "AC",
    equals: "=",
  },
};

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    addToQuery: (state, action) => {
      if (state.query === "0") {
        if (+action.payload || action.payload === ".")
          state.query = action.payload;
        return;
      }

      if(action.payload === "0" && state.query.at(-1) === "0") return;
      
      let isExpCorrect = true;

      if (action.payload === ".")
        isExpCorrect = evaluateCatch(
          evaluate,
          state.query + action.payload
        ).status;

      if (isExpCorrect) {
        state.query = state.query + action.payload;
      } else {
        if (+action.payload) {
          state.query = state.query + action.payload;
        }
      }
    },
    removeQuery: (state) => {
      state.query = "0";
      state.result = "0";
    },
    equalsTo: (state) => {
      state.result = evaluateCatch(evaluate, state.query).value;
    },
  },
});

export const { addToQuery, removeQuery, equalsTo } = calculatorSlice.actions;

export default calculatorSlice.reducer;
