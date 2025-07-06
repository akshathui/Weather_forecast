import React, { useContext } from 'react';
import Forecast_days from './Forecast_days';
import { WeatherContext } from '../../context/WeatherProvider';

const Section = () => {
  const { weather } = useContext(WeatherContext);
  const current = weather.response?.current;
  const hourly = weather.response?.hourly?.data?.[0];

  if (!current) {
    return (
      <div className="w-3/4 h-full flex items-center justify-center text-2xl">
        Loading weather...
      </div>
    );
  }

  // Fallbacks for humidity and feels_like
  const humidity = current.humidity ?? hourly?.humidity ?? 'N/A';
  const feelsLike = current.feels_like ?? hourly?.feels_like ?? 'N/A';

  return (
    <div className="w-3/4 h-full">
      <div className="flex flex-col items-center">
        <div className="w-full h-1/2 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <h1 className="text-[12rem]">{current.temperature}°</h1>
            <h1 className="text-4xl font-light overflow-hidden">{current.weather}</h1>
          </div>
          <div className="ml-8">
            <h4 className="text-xl font-light">
              <i className="ri-windy-line"></i> {current.wind?.speed ?? hourly?.wind?.speed ?? 'N/A'} mph
            </h4>
          </div>
        </div>
        <div className="mt-10 text-lg w-1/2 text-center">
          "{weather.response.daily?.data[0]?.summary || 'No summary available'}"
        </div>
      </div>
      <div className="w-full h-1/2 justify-center flex gap-4 no-scrollbar overflow-auto px-30 py-8 items-center">
        <Forecast_days />
      </div>
    </div>
  );
};

export default Section;
