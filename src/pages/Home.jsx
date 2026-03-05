import React from 'react'
import Hero from '../components/home/Hero'
import FilterComponent from '../components/home/FilterComponent'
import FilterComponent2 from '../components/home/FilterComponent2'
import FilterComponent3 from '../components/home/FilterComponent3'

const Home = () => {
  return (
    <main>
    <Hero/>
    <FilterComponent/>
    <FilterComponent2/>
    <FilterComponent3/>
    </main>
  )
}

export default Home

// `url(${one})`