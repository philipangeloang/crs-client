import React from "react";

const Calendar = () => {
  const times = ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM"]; // Add more time slots as needed
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"]; // Add more days as needed

  // Example: Meeting data
  const meetings = [
    { day: "Mon", time: "8:00 AM", title: "Engineering Meeting" },
    { day: "Wed", time: "9:00 AM", title: "Design Review" },
    // Add more meeting data as needed
  ];

  return (
    <div className="flex bg-gray-100 p-2">
      <div className="flex flex-col">
        <div className="w-20 h-8 bg-gray-300 border border-gray-400"></div>
        {times.map((time, timeIndex) => (
          <div key={timeIndex} className="w-20 h-16 border border-gray-400">
            <div className="bg-gray-200 border-b border-gray-400 flex items-center justify-center">
              {time}
            </div>
          </div>
        ))}
      </div>
      

      {/* Days */}
      {days.map((day, index) => (
        <div
          key={index}
          className="w-20 h-8 bg-blue-500 text-white font-semibold border border-gray-400 flex items-center justify-center"
        >
          {day}
        </div>
      ))}
    </div>
  );
};

export default Calendar;
