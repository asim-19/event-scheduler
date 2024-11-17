// app/components/EventForm.js
"use client";

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addEvent, editEvent } from '../store/eventsSlice';
import { v4 as uuidv4 } from 'uuid';

const EventForm = ({ editEventId }) => {
  const dispatch = useDispatch();
  const selectedDate = useSelector((state) => state.events.selectedDate);
  const events = useSelector((state) => state.events.events);
  const [description, setDescription] = useState('');
  const [editMode, setEditMode] = useState(false);

   // Populate form fields when editing an event
  useEffect(() => {
    if (editEventId) {
      addone
      const eventToEdit = events.find(event => event.id === editEventId);
      if (eventToEdit) {
        setDescription(eventToEdit.description);
        setEditMode(true);
      }
    } else {
      setEditMode(false);
    }
  }, [editEventId, events]);

   // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const event = { id: editEventId || uuidv4(), description, date: selectedDate };

    
    if (editMode) {
      // Update existing event
      dispatch(editEvent(event));
      setEditMode(false);
    } else {
       // Add new event
      dispatch(addEvent(event));
    }
    setDescription('');
  };

  return (
    <div className="event-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Event description"
          required
        />
        <button type="submit">{editMode ? 'Update Event' : 'Add Event'}</button>
        {editMode && (
          <button type="button" onClick={() => { setEditMode(false); }}>Cancel</button>
        )}
      </form>
    </div>
  );
};

export default EventForm;
