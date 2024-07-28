// app/components/Calendar.js
"use client";

import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedDate } from '../store/eventsSlice';

const MyCalendar = () => {
  const dispatch = useDispatch();
  const selectedDate = useSelector((state) => state.events.selectedDate);
  const events = useSelector((state) => state.events.events);
  const [date, setDate] = useState(selectedDate);

  useEffect(() => {
    setDate(selectedDate);
  }, [selectedDate]);

  const handleDateChange = (newDate) => {
    setDate(newDate);
    dispatch(setSelectedDate(newDate));
  };

  const handleMonthChange = ({ activeStartDate }) => {
    setDate(activeStartDate);
    dispatch(setSelectedDate(activeStartDate));
  };

  const tileContent = ({ date }) => {
    // Display markers for events
    const hasEvent = events.some(event => new Date(event.date).toDateString() === date.toDateString());
    return hasEvent ? <div className="calendar-event-marker" /> : null;
  };

  return (
    <div className="calendar-container">
      <Calendar
        onChange={handleDateChange}
        value={date}
        onActiveStartDateChange={handleMonthChange}
        showNeighboringMonth={false}
        next2Label={null}
        prev2Label={null}
        nextLabel={<div className="calendar-nav-button">&gt;</div>}
        prevLabel={<div className="calendar-nav-button">&lt;</div>}
        tileContent={tileContent}
      />
    </div>
  );
};

export default MyCalendar;

