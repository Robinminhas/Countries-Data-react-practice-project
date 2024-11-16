import React, { Fragment, useEffect, useState } from 'react'
import Header from './components/Header'
import SearchandFilter from './components/SearchandFilter'
import Countrycart from './components/Countrycart'
import LoadingScreen from './components/LoadingScreen'

export default function App() {
  const [Countries, setCountries] = useState([])
  const [Loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [DarkMode , setDarkMode] = useState(true)

  const handleFetchData = async () => {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all')
      const data = await response.json()
      setCountries(data)
      setLoading(false)
    } 
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleFetchData()
  }, [])


  return (
    <Fragment>
      <section className = {DarkMode? 'bg-slate-800 text-white' : 'bg-white text-black'}>
        <Header darkMode={DarkMode} setDarkmode={setDarkMode}/>
        <SearchandFilter setQuery={setSearchQuery} Mode={DarkMode}/>

        <main className='w-full flex md:justify-evenly justify-center items-center flex-wrap md:flex-row flex-col'>
          {
            Loading? <LoadingScreen />
              :Countries.map((country , index ) => {
                return (
                  country.name.common.toLowerCase().includes(searchQuery)?
                  <Countrycart 
                    key={index}
                    flagimage={country.flags.svg} 
                    Name={country.name.common} 
                    Population={country.population} 
                    Capital={country.capital} 
                    Region={country.region}
                    Mode={DarkMode}
                  />:''
                )
              })
          }
        </main>
      </section>
    </Fragment>
  )
}