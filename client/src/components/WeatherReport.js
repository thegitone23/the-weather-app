import { useEffect, useState } from "react";
import { APIConfig } from "../../config";
import { WeatherIcon } from "./WeatherIcon";
import { celsiusToFahrenheit, weatherFromCode } from "../utils/weather";
import { WeeksForecast } from "./WeeksForecast";

export function WeatherReport({ cityObject }) {
  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (cityObject) {
      const timeoutID = setTimeout(async () => {
        setLoading(true);
        try {
          const weatherResponse = await fetch(
            APIConfig.forecastEndpoint +
              "?" +
              new URLSearchParams({
                latitude: cityObject.latitude,
                longitude: cityObject.longitude,
              })
          );

          const responseData = await weatherResponse.json();

          if (responseData.data) {
            setWeatherData(responseData.data);
          }
        } catch (error) {
          console.log("Error !", error);
        } finally {
          setLoading(false);
        }
      });
      return () => clearTimeout(timeoutID);
    }
  }, [cityObject]);

  return (
    <>
      {loading && <h4>Loading ...</h4>}
      {!loading && (
        <>
          {cityObject && (
            <div>
              <h2>{`${cityObject.city}, ${cityObject.country} (${cityObject.latitude}, ${cityObject.longitude})`}</h2>

              {weatherData.current_weather && (
                <>
                  <hr />
                  <h4 className="flex-align-center">
                    {weatherFromCode(weatherData.current_weather.weathercode)}
                    <WeatherIcon
                      weatherCode={weatherData.current_weather.weathercode}
                      day={weatherData.current_weather.is_day}
                    ></WeatherIcon>
                  </h4>
                  <h4>
                    {" "}
                    {new Date(
                      weatherData.current_weather.time
                    ).toLocaleString()}{" "}
                  </h4>
                  <h4>
                    {weatherData.current_weather.temperature} Celsius /{" "}
                    {celsiusToFahrenheit(
                      weatherData.current_weather.temperature
                    )}{" "}
                    Fahrenheit{" "}
                  </h4>
                  <hr />
                  <WeeksForecast weeksData={weatherData.daily}></WeeksForecast>
                </>
              )}
            </div>
          )}
        </>
      )}
    </>
  );
}