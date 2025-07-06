import React, { createContext, useState, useEffect } from 'react';

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState({}); // holds weather data

  // Default load: fetch weather for Delhi
  useEffect(() => {
    const fetchDefaultWeather = async () => {
      try {
        const res = await fetch(
          `https://www.meteosource.com/api/v1/free/point?place_id=delhi&sections=all&timezone=auto&language=en&key=tyw65nu7dv26vxsp1tihynybmoo13yilqx5yqize`
        );
        const data = await res.json();
        console.log(data)
        setWeather({ response: data });
      } catch (err) {
        console.error('Error fetching default weather:', err);
      }
    };

    fetchDefaultWeather();
  }, []);

  return (
    <WeatherContext.Provider value={{ weather, setWeather }}>
      {children}
    </WeatherContext.Provider>
  );
};
export default WeatherProvider;