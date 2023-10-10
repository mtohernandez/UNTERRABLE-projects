import { configureStore } from "@reduxjs/toolkit";
import quoteReducer from "./quoteSlice";

//* CreateStore is deprecated, so configure store  
const store = configureStore({
  reducer: {
    quote: quoteReducer,
  } 
});

export default store;

