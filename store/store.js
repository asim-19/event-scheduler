 "use client";

 import { configureStore } from '@reduxjs/toolkit';
 import eventsReducer from './eventsSlice';

 // Create and configure the Redux store
 export const store = configureStore({
   reducer: {use
     events: eventsReducer,
   },
 });


