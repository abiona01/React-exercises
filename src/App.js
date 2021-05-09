import React, { useState, useEffect} from 'react'
import useFetch from './useFetch.js'
import { FaChartBar } from "react-icons/fa";

const LanguageGraph = ({ data: { language, count } }) => (
  <div className='bars'>
    <div>{language}</div>
    <div className='bar' style={{ width: `${count}%`, height: '35px' }}></div>
    <div>{count}</div>
  </div>
)

const LanguageGraphBars = ({ languages }) => {
  const bars = languages.map((data) => {
    return <LanguageGraph key={data.language} data={data} />
  })
  return <div className='graphWrapper'>{bars}</div>
}
const PopulationGraph = ({ data: { name, population } }) => {
  const worldPopulation = 7693165599 // World population
  let formattedName
  if (name === 'Russian Federation') formattedName = 'Russia'
  else if (name === 'United States of America') formattedName = 'USA'
  else formattedName = name

  const width = Math.round((population / worldPopulation) * 100)
  return (
    <div className='bars'>
      <div>{formattedName}</div>
      <div className='bar' style={{ width: `${width}%`, height: '35px' }}></div>
      <div>{population.toLocaleString()}</div>
    </div>
  )
}

const PopulationGraphBars = ({ populations }) => {
  const bars = populations.map((data) => {
    return <PopulationGraph key={data.name} data={data} />
  })
  return (
    <div className='graphWrapper'>
      <PopulationGraph data={{ name: 'World', population: 7693165599 }} />
      {bars}
    </div>
  )
}


const Country = ({ country: { name, capital, languages, flag, population, currency } }) => {
  const formatLanguage = languages.length > 1 ? `Languages` : `Language`
  return (
    <div className='country'>
      <div className='country_flag'>
        <img src={flag} alt={name} />
      </div>
      <h3 className='country_name'>{name.toUpperCase()}</h3>
      <div className='country_text'>
      <p><span>Capital: </span>
          {capital}</p>
      <p>
          <span>{formatLanguage}: </span>
          {languages.map((language) => language.name).join(', ')}
        </p>
        <p>
          <span>Population: </span>
          {population}
        </p>
        <p>
          <span>Currency:</span>
        </p>
      </div>
    </div>
  )
}

const App = (props) => {
  // setting initial state and method to update state
  const [permData, setPermData] = useState([])
    const [value, setValue] = useState('')
    const [graph, setGraph] = useState('population')
    const [flag, setFlag] = useState({
      name: true,
      capital: false,
      population: false,
    })
  const url = 'https://restcountries.eu/rest/v2/all'
  const data = useFetch(url);
  useEffect(() => {
  ;(async function () {
    let result = await fetchData()
    let filteredCountries = filterCountries(result, value)
    setPermData(result)
    setData(filteredCountries)
  })()
}, [value, flag, graph, url])


  const onChange = (e) => setValue(e.target.value)

  
    const sortByName = (data) => {
      let sortedCountries =
        value === ''
          ? reverseCountries(data)
          : sortCountries(filterCountries(data, value), 'name')
      setData(sortedCountries)
    }
    console.log(sortByName)
    const sortByCapital = (data) => {
      let sortedCountries =
        value === ''
          ? reverseCountries(data)
          : sortCountries(filterCountries(data, value), 'capital')
      if (flag.capital) {
        setFlag({ ...flag, name: false, population: false })
        setData(sortedCountries)
      } else {
        setData(sortedCountries)
      }
    }
    console.log(sortByCapital)
  
    const sortByPopulation = () => {
      let sortedCountries =
        value === ''
          ? reverseCountries(data)
          : sortCountries(filterCountries(data, value), 'population')
      setData(sortedCountries)
    }
    console.log(sortByPopulation)
    const changeToPopulationGraph = () => {
      setGraph('population')
    }
    const changeToLanguageGraph = () => {
      setGraph('language')
    }
  
    
    /* === Sorting countries either by name, capital or population === */
    const sortCountries = (arr, type) => {
      const countries = [...arr]
      const sortedCountries = countries.sort((a, b) => {
        if (a[type] > b[type]) return -1
        if (a[type] < b[type]) return 1
        return 0
      })
      return sortedCountries
    }
    /* === Filter countries based on search input === */
    const filterCountries = (arr, search) => {
      let searchTerm = search.toLowerCase()
      const filteredCountries = arr.filter((country) => {
        const { name, capital, languages } = country
        const isName = name.toLowerCase().includes(searchTerm)
        const isCapital = capital.toLowerCase().includes(searchTerm)
  
        const isLanguages = languages
          .map(({ name }) => name)
          .join()
          .toLowerCase()
          .includes(searchTerm)
  
        return isName || isCapital || isLanguages
      })
      const result = search === '' ? arr : filteredCountries
      return result
    }
    /* === Reverse countries array === */
    const reverseCountries = (arr) => {
      const countries = [...arr]
      return countries.reverse()
    }
    /* create bar graph for language */
    const countLanguages = (arr) => {
      const langSet = new Set()
      const allLangArr = []
      const languageFrequency = []
      arr.forEach((country) => {
        let { languages } = country
        for (const language of languages) {
          allLangArr.push(language.name)
          langSet.add(language.name)
        }
      })
      for (const l of langSet) {
        const countries = allLangArr.filter((lang) => lang === l)
        languageFrequency.push({ language: l, count: countries.length })
      }
      return languageFrequency
    }
  
    /*=== Ten most populated countries ===*/
    const mostPopulatedCountries = sortCountries(data, 'population').slice(0, 10)
  
    /*=== Ten most spoken language by region or by location ===*/
    const mostSpokenLanguages = sortCountries(
      countLanguages(data),
      'count'
    ).slice(0, 10)
  const Header = () => {
    return (
      <header className="country-header">
        <h1>World Countries Data</h1>
        <p><span>Currently, we have {permData.length} countries</span></p>
        {value !== '' ? (
          <p className='feedback'>
            {data.length} satisfied the search criteria
          </p>
        ) : (
          ''
        )}
      </header>
    )
  }
  return (
    <div className='App'>
      <Header />
      <div className='controls'>
        <input
          className='search-input'
          type='text'
          onChange={onChange}
          value={value}
          placeholder='Search countries by name, city and languages'
          autoFocus
        />
        <div>
          <a href='#stat'>
            <FaChartBar className="icon"/>
          </a>
        </div>
      </div>
        <div className='countries-wrapper'>
          {data.map((country) => (
            <Country key={country.name} country={country} />
          ))}
        </div>
        <div className='graph-wrapper'>
        <div className='graph-buttons'>
          <button onClick={changeToPopulationGraph} className='population'>
            Population
          </button>
          <button onClick={changeToLanguageGraph} className='languages'>
            Languages
          </button>
        </div>
        <h4 className='graph-title'>
          {graph === 'population' && value === ''
            ? '10 Most populated countries in the world'
            : '10 Most spoken languages in the world'}
        </h4>
        <div className='graphs'>
          <div className='graph' id='stat'>
            {graph === 'population' ? (
              <PopulationGraphBars
                populations={mostPopulatedCountries}
                className={graph}
              />
            ) : (
              <LanguageGraphBars
                languages={mostSpokenLanguages}
                className={graph}
              />
            )}
          </div>
        </div>
      </div>
      </div>
  )
}

export default App