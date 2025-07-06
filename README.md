# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
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
