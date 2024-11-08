import { useState } from "react";
import FullCalendar from "@fullcalendar/react"; // Main FullCalendar package
import dayGridPlugin from "@fullcalendar/daygrid"; // Plugin for month view
import timeGridPlugin from "@fullcalendar/timegrid"; // Plugin for week and day views
import interactionPlugin from "@fullcalendar/interaction"; // Plugin for drag-and-drop interactions

function Calendar() {
  // State to hold the events
  const [events, setEvents] = useState([
    { title: "Existing Event", date: "2023-12-10" },
  ]);

  // Handler for adding an event on date click
  const handleDateClick = (info) => {
    // Prompt the user to enter a title for the event
    const title = prompt("Enter event title:");
    if (title) {
      // Add the new event to the events array
      setEvents([
        ...events,
        { title, date: info.dateStr }, // Add the new event with the title and clicked date
      ]);
    }
  };

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          start: "prev,next today",
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        events={events} // Pass events from state
        dateClick={handleDateClick} // Attach date click handler
      />
    </div>
  );
}

export default Calendar;
