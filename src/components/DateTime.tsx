import { useState, useEffect } from "react";

const DateTime = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Update every second

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const formattedDate = new Intl.DateTimeFormat("en-PH", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(currentDate);
  const formattedTime = currentDate.toLocaleTimeString("en-PH", {
    timeStyle: "short",
  });

  return (
    <div className="flex flex-col items-end">
      <p className="text-main-blue font-bold text-md">{formattedDate}</p>{" "}
      {/* Blue text for the date */}
      <p>{formattedTime}</p> {/* Display time without seconds */}
    </div>
  );
};

export default DateTime;
