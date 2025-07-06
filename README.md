
# 🌦️ React Weather App

A responsive and minimal weather app built with **React.js** and **Tailwind CSS**.  
It fetches live weather data from the [Meteosource API](https://www.meteosource.com/) and displays current, hourly, and daily forecasts.

---

## 🚀 Features

- 🔍 Search for any city worldwide and get live weather updates
- 🌡️ Current weather with temperature, wind speed, and condition
- 📆 7-day forecast with min/max temperatures
- 🕐 Hourly forecast for the next 6 hours
- ⏱️ Real-time clock and dynamic greetings (Good Morning / Afternoon / Evening)
- 💨 Displays wind speed and atmospheric pressure (or UV index if configured)
- Responsive UI built with Tailwind CSS
- Clean and modern design with React components

---

## 🖥️ Demo

> _Add your deployed link here if hosted (e.g., Vercel, Netlify)_

---

## 📦 Tech Stack

- [React.js](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Meteosource API](https://www.meteosource.com/)
- [Vite](https://vitejs.dev/) (for fast development)

---

## 🔑 API Key

This project uses the **Meteosource Free API**.  
Get your API key by signing up at [Meteosource](https://www.meteosource.com/) and replace `YOUR_API_KEY` in:

```js
https://www.meteosource.com/api/v1/free/point?place_id={placeId}&sections=all&timezone=auto&language=en&key=YOUR_API_KEY
