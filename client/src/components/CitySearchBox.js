import { useEffect, useState } from "react";
import { APIConfig } from "../../config";

export function CitySearchBox({ citySelectionCallback }) {
  const searchDebounceTimeMS = 1000;
  const [citySearchTerm, setCitySearchTerm] = useState("Bengaluru");
  const [searchingCity, setSearchingCity] = useState(false);
  const [citySearchResults, setCitySearchResults] = useState([]);
  const [loadingFailed, setLoadingFailed] = useState(false);

  const searchTextChangeHandler = (event) => {
    const value = event.target.value;
    setCitySearchTerm(value.trim());
  };

  const updatecitySearchResultsFromResponse = (results) => {
    if (results) {
      const updatedResults = [];
      for (const result of results) {
        const obj = {
          city: result.name,
          country: result.country,
          country_code: result.country_code,
          latitude: Number(parseFloat(result.latitude).toFixed(4)),
          longitude: Number(parseFloat(result.longitude).toFixed(4)),
        };

        updatedResults.push(obj);
      }
      setCitySearchResults(updatedResults);
    }
  };

  const searchResultClickHandler = (event, resultData) => {
    event.preventDefault();
    citySelectionCallback(resultData);
    setCitySearchTerm("");
  };

  useEffect(() => {
    setLoadingFailed(false);
    const timeoutID = setTimeout(async () => {
      setCitySearchResults([]);
      setSearchingCity(true);
      try {
        const searchResponse = await fetch(
          APIConfig.searchEndpoint +
            "?" +
            new URLSearchParams({
              city: citySearchTerm,
            })
        );

        const responseData = await searchResponse.json();
        if (responseData.data && responseData.data.results) {
          updatecitySearchResultsFromResponse(responseData.data.results);
        }
      } catch (error) {
        setLoadingFailed(true);
        console.log("Error !", error);
      } finally {
        setSearchingCity(false);
      }
    }, searchDebounceTimeMS);

    return () => clearTimeout(timeoutID);
  }, [citySearchTerm]);

  return (
    <>
      <input
        type="search"
        placeholder="City"
        id="city-search-box"
        value={citySearchTerm}
        onChange={searchTextChangeHandler}
      ></input>

      {citySearchTerm && (
        <div id="city-search-result">
          {loadingFailed && <div>Failed Loading Data...</div>}
          {!loadingFailed && searchingCity && <div>Searching...</div>}

          {!loadingFailed && !searchingCity && citySearchResults.length > 0 && (
            <div>
              {citySearchResults.map((data, idx) => (
                <div key={idx}>
                  <a
                    href="#"
                    onClick={(event) => searchResultClickHandler(event, data)}
                  >
                    {`${data.city}, ${data.country}, (${data.latitude}, ${data.longitude})`}
                  </a>
                </div>
              ))}
            </div>
          )}

          {!searchingCity && citySearchResults.length == 0 && (
            <div>No Results Found</div>
          )}
        </div>
      )}
    </>
  );
}
