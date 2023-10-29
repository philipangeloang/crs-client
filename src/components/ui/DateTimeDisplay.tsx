import { useState } from 'react';

function DateTimeDisplay() {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    // Update the current date and time every second
    setInterval(() => {
        setCurrentDateTime(new Date());
    }, 1000);

    const formattedDate = currentDateTime.toLocaleDateString([],{year: 'numeric', month: 'long', day: 'numeric' });
    const formattedTime = currentDateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    return (
        <div className="flex flex-col items-end">
            <h1 className="text-main-blue font-bold text-md">
                {formattedDate}
            </h1>
            <p>{formattedTime}</p>
        </div>
    );
}

export default DateTimeDisplay;
