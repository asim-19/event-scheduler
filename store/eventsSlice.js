"use client";
// app/store/eventsSlice.js


import { createSlice } from '@reduxjs/toolkit';


const eventsSlice = createSlice({
  name: 'events',
  initialState: {
    events: [],
    selectedDate: new Date(),
  },
  reducers: {

     // Set the selected date
    setSelectedDate(state, action) {
      state.selectedDate = action.payload;
    },
     // Add a new event
    addEvent(state, action) {
      state.events.push(action.payload);
    },
     // Edit an existing event
    editEvent(state, action) {
      const index = state.events.findIndex(event => event.id === action.payload.id);
      if (index !== -1) {
        state.events[index] = action.payload;
      }
    
    },
    // Delete an event by id
    deleteEvent(state, action) {
      state.events = state.events.filter(event => event.id !== action.payload);
    }
  }
});

export const { setSelectedDate, addEvent, editEvent, deleteEvent } = eventsSlice.actions;

export default eventsSlice.reducer;
