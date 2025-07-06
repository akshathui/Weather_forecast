import React, { useContext, useState } from 'react';
import { WeatherContext } from '../context/WeatherProvider';

const Header = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-GB').replace(/\//g, '.');

  const hour = today.getHours();
  const greeting =
    hour < 12 ? 'Good Morning' :
    hour < 17 ? 'Good Afternoon' :
    'Good Evening';

  const { weather, setWeather } = useContext(WeatherContext);
  const [query, setQuery] = useState('');

  const fetchWeather = async () => {
    if (!query) return;

    try {
      // Step 1: Search the place to get place_id
      const searchRes = await fetch(
        `https://www.meteosource.com/api/v1/free/find_places?text=${query}&key=tyw65nu7dv26vxsp1tihynybmoo13yilqx5yqize`
      );
      const searchData = await searchRes.json();

      if (!searchData || searchData.length === 0) {
        alert('City not found');
        return;
      }

      const placeId = searchData[0].place_id;

      // Step 2: Fetch forecast for the place_id
      const forecastRes = await fetch(
        `https://www.meteosource.com/api/v1/free/point?place_id=${placeId}&sections=all&timezone=auto&language=en&key=tyw65nu7dv26vxsp1tihynybmoo13yilqx5yqize`
      );
      const forecastData = await forecastRes.json();

      if (!forecastData.current) {
        alert('No weather data found for this location');
        return;
      }

      // Update global weather context
      setWeather({
        ...weather, // preserve existing keys if any
        response: forecastData,
      });

    } catch (err) {
      console.error('Error fetching weather:', err);
      alert('Failed to fetch weather data');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') fetchWeather();
  };

  return (
    <header className='px-8 py-4 text-md flex items-center justify-between'>
      <span>{formattedDate}</span>
      <input
        type="text"
        name="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyPress}
        className='focus:outline-none font-extralight text-xl rounded-lg px-1 text-center'
        placeholder='Search your city'
      />
      <span>{greeting}</span>
    </header>
  );
};

export default Header;
