import { useEffect, useState } from "react";
import "./App.css";
import SearchCity from "./components/SearchCity";
import ShowWeather from "./components/ShowWeather";

function App() {
    const [city, setCity] = useState("Solan");
    const [weather, setWeather] = useState({});
    const getData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        const { temp, humidity, pressure } = data.main;
        const name = data.name;
        const { main: weatherType, icon } = data.weather[0];
        const { speed: windSpeed } = data.wind;
        const { country } = data.sys;
        const weatherData = {
            temp,
            humidity,
            pressure,
            weatherType,
            icon,
            windSpeed,
            country,
            name,
        };
        console.log(weatherData);
        setWeather(weatherData);
    };
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9d8fd1be238b3a89a507b7313fad6837&units=metric`;
    useEffect(() => {
        getData();
    }, []);
    return (
        <div className="App">
            <div className="container">
                <div style={{ textAlign: "center" }}>
                    <h1 style={{ margin: "0px" }}>Weather App</h1>
                    <hr />
                </div>
                <div>
                    <SearchCity
                        getData={getData}
                        setCity={setCity}
                    />
                    <ShowWeather weather={weather} />
                </div>
            </div>
        </div>
    );
}

export default App;
