import React, { Fragment, useEffect, useState } from 'react'
import Header from './components/Header'
import SearchandFilter from './components/SearchandFilter'
import Countrycart from './components/Countrycart'

export default function App() {
  const [Countries, setCountries] = useState([])
  const handleFetchData = async () => {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all')
      const data = await response.json()
      setCountries(data)
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
      <Header />
      <SearchandFilter />

      <main className='w-full flex md:justify-evenly justify-center items-center flex-wrap md:flex-row flex-col'>
        {
          Countries.map((country , index ) => {
            return (
              <Countrycart 
                key={index}
                flagimage={country.flags.svg} 
                Name={country.name.common} 
                Population={country.population} 
                Capital={country.capital} 
                Region={country.region}
              />
            )
          })
        }
      </main>

    </Fragment>
  )
}
