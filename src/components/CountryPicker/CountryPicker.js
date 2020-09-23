import React, {useState, useEffect} from 'react'

import { fetchCountries } from "../../api"

const CountryPicker = ({handleCountryChange}) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    }
    
    fetchAPI();
  },[setCountries]);

  const countryList =(
  
  countries.map((country, index) => <option key={index} value = {country}> {country}</option>)
  )

  return (
    <div className="row form-group justify-content-center">
      <div className="col-11 col-md-9 col-lg-6">
        <select className="custom-select" defaultValue="" onChange={(e) => { handleCountryChange(e.target.value)}} >
          
          <option value="">Global</option>
         { countryList}
        </select>
      </div>
      
    </div>
  )
}

export default CountryPicker
