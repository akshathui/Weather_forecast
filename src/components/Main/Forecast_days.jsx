import React, { useContext } from 'react';
import { WeatherContext } from '../../context/WeatherProvider';

const Forecast_days = () => {
  const { weather } = useContext(WeatherContext);
  const dailyData = weather?.response?.daily?.data || [];

  const getDayLabel = (dateString) => {
    const forecastDate = new Date(dateString);
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    if (
      forecastDate.getDate() === today.getDate() &&
      forecastDate.getMonth() === today.getMonth() &&
      forecastDate.getFullYear() === today.getFullYear()
    ) {
      return 'Today';
    } else if (
      forecastDate.getDate() === tomorrow.getDate() &&
      forecastDate.getMonth() === tomorrow.getMonth() &&
      forecastDate.getFullYear() === tomorrow.getFullYear()
    ) {
      return 'Tomorrow';
    } else {
      const day = forecastDate.getDate().toString().padStart(2);
      const month = (forecastDate.getMonth() + 1).toString().padStart(2, '0');
      return `${day}/${month}`;
    }
  };

  if (!dailyData.length) {
    return <p className="text-center text-gray-400">Loading forecast...</p>;
  }

  return (
    <>
      {dailyData.map((item, index) => (
        <div
          key={index}
          className="shadow-lg hover:shadow-xl/15 h-max p-4 rounded-2xl flex flex-col justify-center items-center"
        >
          <h3 className="text-xl font-light capitalize">
            {getDayLabel(item.day)}
          </h3>
          <h1 className="text-lg font-light ml-2">
            {item.all_day?.temperature_min ?? '--'}°/
            {item.all_day?.temperature_max ?? '--'}°
          </h1>
          <h4 className="text-xl font-extralight">
            {item.all_day?.wind?.speed ?? '--'} mph
          </h4>
        </div>
      ))}
    </>
  );
};

export default Forecast_days;
