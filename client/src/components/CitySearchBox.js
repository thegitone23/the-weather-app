import { useEffect, useState } from "react";
import { APIConfig } from "../../config";

export function CitySearchBox() {
  const searchDebounceTimeMS = 2500;
  const [citySearchTerm, setCitySearchTerm] = useState('');
  const [citySearchResults, setCitySearchResults] = useState('');

  const searchTextChangeHandler = (event) => {
    const value = event.target.value; 
    if(value) {
      console.log('updating value to ', value);
      setCitySearchTerm(value.trim())
    }
  }
  
  useEffect(() => {
    const timeoutID = setTimeout(async () => {
      try {
        const searchResponse = await fetch(APIConfig.searchEndpoint + '?' + new URLSearchParams({
          city: citySearchTerm
        }));

        const responseData = await searchResponse.json();
        console.log('response data', responseData);
      }
      catch(error) {
        console.log('Error', error);
      }
    }, searchDebounceTimeMS);
    
    return () => clearTimeout(timeoutID);
  }, [citySearchTerm]);


  return(
    <>
      <input type="search" placeholder="City" id="city-search" onChange={searchTextChangeHandler}></input>
    </>
  )
}
