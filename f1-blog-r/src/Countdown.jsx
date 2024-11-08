import { useState, useEffect } from "react";

function Countdown() {
  // State to store the target date and remaining time
  const [targetDate, setTargetDate] = useState(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Update the countdown every second
  useEffect(() => {
    if (!targetDate) return;

    const intervalId = setInterval(() => {
      updateCountdown();
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [targetDate]);

  // Function to handle date input changes
  const handleDateChange = (e) => {
    setTargetDate(new Date(e.target.value).getTime()); // Set the target date
  };

  // Function to calculate and update the countdown
  const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance > 0) {
      // Calculate time remaining
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setTimeLeft({ days, hours, minutes, seconds });
    } else {
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    }
  };

  return (
    <div>
      <h1>Countdown Timer</h1>
      <input
        type="date"
        onChange={handleDateChange}
        style={{ padding: "10px", fontSize: "16px" }}
      />
      {targetDate && (
        <div style={{ marginTop: "20px", fontSize: "24px" }}>
          <p>
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
            {timeLeft.seconds}s
          </p>
        </div>
      )}
    </div>
  );
}

export default Countdown;
