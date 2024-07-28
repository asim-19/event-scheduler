// app/components/EventList.js

"use client";

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteEvent } from '../store/eventsSlice';


const EventList = ({ onEdit }) => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events.events);
  const selectedDate = useSelector((state) => state.events.selectedDate);

   // Handler for deleting an event
  const handleDelete = (id) => {
    dispatch(deleteEvent(id));
  };

  // Filter events to display that match the selected date
  const filteredEvents = events.filter(event => new Date(event.date).toDateString() === selectedDate.toDateString());

  return (
    <div className="event-list">
      <h2>Events for {selectedDate.toDateString()}</h2>
      <ul>
        {filteredEvents.map(event => (
          <li key={event.id}>
            {event.description}
            <button onClick={() => onEdit(event.id)}>Edit</button>
            <button onClick={() => handleDelete(event.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
