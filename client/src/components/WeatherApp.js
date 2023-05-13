import { useState } from "react";
import { CitySearchBox } from "./CitySearchBox";
import { WeatherReport } from "./WeatherReport";

export function WeatherApp() {

  [cityObject, setCityObject] = useState(undefined);

  citySelectionCallback = (cityObject) => {
    setCityObject(cityObject);
  }

  return (
    <>
      <CitySearchBox citySelectionCallback={citySelectionCallback}></CitySearchBox>
      <WeatherReport cityObject={cityObject}></WeatherReport>
    </>
  );
}
