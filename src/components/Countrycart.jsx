import React from 'react'

function Countrycart({key , flagimage , Name , Population , Capital , Region}) {
  return (
    <section key={key} className='md:w-[30%] sm:w:20vw h-[26rem] mt-10 bg-slate-700 shadow-2xl rounded-2xl hover:cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out'>
        <img src={flagimage} alt="" className='w-[90%] ml-5 pt-3 h-[60%]'/>
        <h1 className='ml-10 font-bold md:text-[30px]'>{Name}</h1>
        <p className='ml-6 text-slate-400 p-2'>Population : {Population.toLocaleString()}</p>
        <p className='ml-6 text-slate-400 p-2'>Capital : {Capital}</p>
        <p className='ml-6 text-slate-400 p-2'>Region : {Region}</p>
    </section>
  )
}

export default Countrycart