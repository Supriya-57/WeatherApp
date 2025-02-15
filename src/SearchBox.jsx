import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "05494e750d8db3b5082ab293200bbc01";

  const getWeatherInfo = async () => {
    try {
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      
      if (!response.ok) {
        throw new Error("City not found");
      }

      let jsonResponse = await response.json();

      let result = {
        city: jsonResponse.name, // Using API's formatted city name
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };

      return result;
    } catch (err) {
      throw err;
    }
  };

  const handleChange = (evt) => {
    setCity(evt.target.value);
    setError(false); // Reset error when user types
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    if (!city.trim()) return; // Prevent empty submissions

    try {
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
      setCity(""); // Clear input after successful search
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="Enter City Name"
          variant="standard"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit" disabled={!city.trim()}>
          Search
        </Button>
        {error && <p style={{ color: "red" }}>No such place exists!</p>}
      </form>
    </div>
  );
}
