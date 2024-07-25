import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./MyCalendar.css"; // Import file CSS tùy chỉnh cho react-calendar

function MyCalendar() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="w-[450px]">
      <div className="w-full h-max p-4 bg-white shadow-lg rounded-lg">
        <Calendar onChange={setDate} value={date} className="custom-calendar" />
      </div>
    </div>
  );
}

export default MyCalendar;
