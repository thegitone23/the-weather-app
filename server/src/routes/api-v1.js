const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/search", async (req, res) => {
  const name = req.query.city || "";
  try {
    const response = await axios.get(
      "https://geocoding-api.open-meteo.com/v1/search",
      {
        params: {
          name,
          count: 5,
        },
      }
    );

    res.json({ status: "success", data: response.data });
  } catch (error) {
    console.log("error !", error.response);
    res.status(error.response.status).json({ status: "faliure" });
  }
});

router.get("/forecast", async (req, res) => {
  const latitude = req.query.latitude;
  const longitude = req.query.longitude;
  const temperature_unit = req.query.unit || "celsius";

  try {
    const response = await axios.get("https://api.open-meteo.com/v1/forecast", {
      params: {
        latitude,
        longitude,
        temperature_unit,
        timezone: "auto",
        current_weather: true,
        daily: [
          "weathercode",
          "temperature_2m_max",
          "temperature_2m_min",
          "precipitation_probability_max",
        ],
      },
    });
    res.json({ status: "success", data: response.data });
  } catch (error) {
    console.log("error !", error.response);
    res.status(error.response.status).json({ status: "faliure" });
  }
});

module.exports = router;
