import  { useEffect, useState } from 'react';

const CountDownTimer = ({ seconds }) => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      const days = Math.floor(seconds / (3600 * 24));
      const hours = Math.floor((seconds % (3600 * 24)) / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      const remainingSeconds = seconds % 60;

      setTime({
        days,
        hours,
        minutes,
        seconds: remainingSeconds,
      });

      if (seconds === 0) {
        clearInterval(countdownInterval);
      } else {
        seconds -= 1;
      }
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [seconds]);

  return (
    <div className="flex gap-5 ">
      <div className="countdown-item bg-gray-200 px-5 py-2  flex justify-center items-center flex-col rounded-lg ">
        <div className="text-md font-bold">{time.days}</div>
        <div className="text-sm">Days</div>
      </div>
      <div className="countdown-item bg-gray-200 px-5 py-2  flex justify-center items-center flex-col rounded-lg ">
        <div className="text-md font-bold">{time.hours}</div>
        <div className="text-sm">Hours</div>
      </div>
      <div className="countdown-item bg-gray-200 px-5 py-2  flex justify-center items-center flex-col rounded-lg ">
        <div className="text-md font-bold">{time.minutes}</div>
        <div className="text-sm">Min</div>
      </div>
      <div className="countdown-item bg-gray-200 px-5 py-2  flex justify-center items-center flex-col rounded-lg ">
        <div className="text-md font-bold">{time.seconds}</div>
        <div className="text-sm">Sec</div>
      </div>
    </div>
  );
};

export default CountDownTimer;
