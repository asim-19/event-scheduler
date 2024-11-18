// // app/page.js
"use client";

import MyCalendar from './components/Calendar';
import EventForm from './components/EventForm';
import EventList from './components/EventList';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedDate } from './store/eventsSlice';

export default function HomePage() {
  const dispatch = useDispatch();
  const selectedDate = useSelector((state) => state.events.selectedDate);
  const [editEventId, setEditEventId] = useState(null);

  // Function to handle editing an event
  const handleEditEvent = (id) => {
    setEditEventId(id);
  };

  return (
    <main>
      <div className="container">
        <h1>Event Scheduler</h1>
        <MyCalendar />
        <EventForm editEventId={editEventId} />
        <EventList onEdit={handleEditEvent} />
      </div>
    </main>
  );
}


