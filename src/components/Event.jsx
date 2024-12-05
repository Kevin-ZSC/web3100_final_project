import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function Event() {
    const [date, setDate] = useState(new Date());

  return (
    <div className="bg-gradient-to-br from-blue-500 to-blue-400 w-11/12 sm:w-4/5 mx-auto px-8 py-8 rounded-2xl shadow-lg mt-5">
  <h3 className="font-joti text-2xl font-bold text-black mb-6 ">
    Events Calendar
  </h3>
  <div className="bg-white rounded-xl p-6 shadow-md">
    <Calendar
      onChange={setDate}
      value={date}
      tileContent={({ date, view }) =>
        view === "month" && date.getDate() === 15 ? (
          <p className="text-red-500 font-bold text-xs">Event</p>
        ) : null
      }
      className="text-sm"
    />
  </div>
  <div className="mt-6 text-center text-white">
    <p className="text-lg font-semibold">
      Selected Date: <span className="font-normal">{date.toDateString()}</span>
    </p>
    <p className="text-sm mt-2">Explore event details for the selected date.</p>
  </div>
</div>

  )
}
