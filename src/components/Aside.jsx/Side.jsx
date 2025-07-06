import React, { useContext, useEffect, useState } from 'react';
import Cards from './Cards';
import { WeatherContext } from '../../context/WeatherProvider';

const getCurrentTime = () => {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12 || 12;
  const minutesStr = minutes < 10 ? '0' + minutes : minutes;

  return `${hours}:${minutesStr} ${ampm}`;
};

const Side = () => {
  const [time, setTime] = useState(getCurrentTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000); // updates every second

    return () => clearInterval(interval); // clean up
  }, []);

  const { weather } = useContext(WeatherContext);
  const current = weather.response?.current;

  if (!current) {
    return (
      <aside className="h-[92.5%] px-4 py-2 w-1/4 flex items-center justify-center text-lg">
        Loading weather...
      </aside>
    );
  }

  return (
    <aside className="h-[92.5%] px-4 py-2 w-1/4 flex flex-col">
      <div className="h-[10%] text-xl flex items-center justify-center">
        {time}
      </div>
      <div className="h-[34%] flex flex-col items-center justify-center">
        <div className="w-full h-1/2 gap-5 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <h1 className="text-[2rem]">{current.temperature}°</h1>
            <h1 className="text-xl font-extralight overflow-hidden">{current.weather}</h1>
          </div>
          <div>
            <h4 className="text-xl font-light">
              <i className="ri-windy-line"></i> {current.wind.speed} mph
            </h4>
          </div>
        </div>
      </div>
      <div className="h-[56%] flex flex-col items-center py-2 px-4">
        <h1 className="text-lg py-5">Hourly Forecast</h1>
        <div className="flex flex-col flex-wrap gap-2 overflow-auto no-scrollbar items-center justify-center px-2 py-6">
          <Cards />
        </div>
      </div>
    </aside>
  );
};

export default Side;
