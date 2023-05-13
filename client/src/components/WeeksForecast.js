import { weatherFromCode } from "../utils/weather";

export function WeeksForecast({ weeksData }) {
  return (
    <>
      {weeksData && (
        <>
        <h3>Next 7 Days</h3>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Min Temprature (Celsius)</th>
              <th>Max Temprature (Celsius)</th>
              <th>Forecast</th>
            </tr>
          </thead>

          <tbody>
            {(new Array(7).fill(0)).map((_element, index) => {
              return (
                <>
                  <tr>
                    <td>{weeksData.time[index]}</td>
                    <td>{weeksData["temperature_2m_min"][index]}</td>
                    <td>{weeksData["temperature_2m_max"][index]}</td>
                    <td>{weatherFromCode(weeksData.weathercode[index])}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
        </>
      )}
    </>
  );
}
