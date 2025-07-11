import React, { useContext } from 'react';
import { WeatherContext } from '../../context/WeatherProvider';

const Cards = () => {
  const { weather } = useContext(WeatherContext);
  const hourly = weather.response?.hourly?.data || [];

  return (
    <>
      {hourly.slice(0, 6).map((hour, index) => (
        <div
          key={index}
          className="shadow-xl flex-wrap hover:shadow-xl/20 h-max p-4 rounded-2xl flex flex-col justify-center items-center"
         >
          <h3 className="text-lg font-light">
            {new Date(hour.date).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
              hour12: false, // Set to true if you want 12-hour format
            })}
          </h3>
          <h1 className="text-xl font-normal ml-2">{hour.temperature}°</h1>
          <h4 className="text-md font-extralight">{hour.summary}</h4>
        </div>
      ))}
    </>
  );
};

export default Cards;
