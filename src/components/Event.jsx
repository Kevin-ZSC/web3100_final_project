import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';


export default function Event() {
  const [date, setDate] = useState(new Date());

 
  return (
    <div className=" bg-blue-400 py-8 rounded-2xl shadow-lg mt-5 flex flex-col items-center flex-1">
      <h3 className="font-joti text-2xl font-bold text-black mb-4 text-center sm:text-left">
        Events Calendar
      </h3>
      <div className="bg-white rounded-xl p-4 shadow-md flex justify-center w-[300px]">
        <Calendar
          onChange={setDate}
          value={date}
          tileContent={({ date, view }) =>
            view === "month" && date.getDate() === 15 ? (
              <p className="text-red-500 font-bold text-xs">Event</p>
            ) : null
          }
        />
      </div>

      <div className="mt-6 text-center text-white">
        <p className="text-lg font-semibold ">
          Selected Date:{" "}
          <span className="font-normal">{date.toDateString()}</span>
        </p>
        <p className="text-sm mt-2 ">
          Explore event details for the selected date.
        </p>
      </div>
  </div>

  );
}
