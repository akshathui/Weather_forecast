import Header from './components/Header'
import Main from './components/Main'
import WeatherProvider from './context/WeatherProvider'


const App = () => {
  return (
    <WeatherProvider>
      <main className='h-screen p-20 w-screen bg-[#E9E9E9]'>
        <div className='w-full shadow-2xl p-2 rounded-xl h-full bg-white py-2'>
          <Header />
          <Main />
        </div>
      </main >
    </WeatherProvider>
  )
}

export default App