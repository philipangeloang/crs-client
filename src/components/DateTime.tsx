import React, { useState, useEffect } from "react";

const DateTime = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Update every second

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = currentDate.getDate();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
  const formattedDate = `${monthNames[month]} ${day}, ${year}`;

  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const amPm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours > 12 ? hours - 12 : hours;
  const formattedTime = `${formattedHours}:${minutes} ${amPm}`;

  return (
    <div>
      <p className="text-main-blue font-bold">{formattedDate}</p>{" "}
      {/* Blue text for the date */}
      <p>{formattedTime}</p> {/* Display time without seconds */}
    </div>
  );
};

export default DateTime;
