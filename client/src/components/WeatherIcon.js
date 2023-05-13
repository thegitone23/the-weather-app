import { useEffect, useState } from "react";
import { weatherFromCode } from "../utils/weather";
import ClearDay from "../../assets/static/day.svg";
import ClearNight from "../../assets/static/night.svg";
import Cloudy from "../../assets/static/cloudy.svg";
import Rainy from "../../assets/static/rainy.svg";
import Snowy from "../../assets/static/snowy.svg";
import Thunder from "../../assets/static/thunder.svg";



export function WeatherIcon({weatherCode, day}) {

  const [status, setStatus] = useState('Clear');

  useEffect(() => {
    setStatus(weatherFromCode(weatherCode) || 'Clear');
  }, [weatherCode])

  const iconSelector = () => {
    if(status == 'Clear') {
      return day ? <ClearDay></ClearDay> : <ClearNight></ClearNight>;
    }

    if(status == 'Cloudy') {
      return <Cloudy></Cloudy>;
    }

    if(status == 'Rainy') {
      return <Rainy></Rainy>;
    }

    if(status == 'Snowy') {
      return <Snowy></Snowy>;
    }

    if(status == 'Thunder') {
      return <Thunder></Thunder>
    }

    return <ClearDay></ClearDay>
  }

  return (
    <>
      {iconSelector()}
    </>
  )
}