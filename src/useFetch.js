import { useState, useEffect } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState([])
    const [permData, setPermData] = useState([])
    const [value, setValue] = useState('')
    const [graph, setGraph] = useState('population')
    const [flag, setFlag] = useState({
      name: true,
      capital: false,
      population: false,
    })
    
    
    useEffect(() => {
        const fetchData = async () => {  
            try {
              const response = await fetch(url)
              const data = await response.json()
              return data
            } catch (error) {
              console.log(error)
            }
          }
      ;(async function () {
        let result = await fetchData()
        let filteredCountries = filterCountries(result, value)
        setPermData(result)
        setData(filteredCountries)
      })()
    }, [value, flag, graph, url])
  
    

    return data
}
export default useFetch