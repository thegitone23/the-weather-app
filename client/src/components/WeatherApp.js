import { useState } from "react";
import { CitySearchBox } from "./CitySearchBox";
import { WeatherReport } from "./WeatherReport";

export function WeatherApp() {

  [cityObject, setCityObject] = useState(undefined); // maintains the selected city object

  citySelectionCallback = (cityObject) => { // used to update the selected city from the child component
    setCityObject(cityObject);
  }

  return (
    <>
      <CitySearchBox citySelectionCallback={citySelectionCallback}></CitySearchBox>
      <WeatherReport cityObject={cityObject}></WeatherReport>
    </>
  );
}
