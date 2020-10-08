import React, {  useState, useEffect, useMemo  } from 'react';
import axios from 'axios';
import {  useHistory  } from 'react-router-dom';

import Header from '../components/Header';
import WeatherImage from "../components/WeatherImage";

const weatherKey = `c192e7c68ea0a788e86845763d2aa2ed`;

function Home() {
    const history = useHistory();

    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState("Jakarta");

    useEffect(() => {
        axios
            .get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherKey}`
            )
            .then(function (response) {
                // successful request
                const weather = response.data;
                setWeatherData(weather);
            })
            .catch(function (error) {
                // error
                console.log(error);
            });
    }, [city]);

    useEffect(() => {   
        const searchParams = history.location.search;
        const urlParams = new URLSearchParams(searchParams);
        const city = urlParams.get("city");
        if (city) {
            setCity(city);
        }
    }, [history]);

    const { 
        cloudiness,
        currentTemp, 
        highTemp, 
        humidity,
        lowTemp, 
        weatherType,
        windSpeed,
    } = useMemo(() => {
        let cloudiness = '';
        let currentTemp = '';
        let highTemp = '';
        let humidity = '';
        let lowTemp = '';
        let weatherType = '';
        let windSpeed = '';

        if(weatherData) {
            cloudiness = weatherData.clouds.all + '%';
            currentTemp = weatherData.main.temp
            highTemp = weatherData.main.temp_max
            humidity = weatherData.main.humidity + '%';
            lowTemp = weatherData.main.temp_min
            weatherType = weatherData.weather[0].description
            windSpeed = weatherData.wind.speed + 'km/h';
        }

        return { 
            cloudiness,
            currentTemp,
            highTemp,
            humidity,
            lowTemp,
            weatherType,
            windSpeed,
         };
    }, [weatherData]);

    // Display:
    // Weather Type (ex. Cloudy)
    // Current Temperature
    // High Temperature
    // Low Temperature
    // Cloudiness
    // Humidity
    // Wind Speed  

    console.log("weatherData", weatherData);

    return (
        <div>
            <Header />
            <main className="Home">
                <h2>Weather in {city}</h2>
                <div className="WeatherInfo">

                    <div className="WeatherInfo_Basic">
                        <div className="WeatherInfo_Image">
                            <WeatherImage weatherType={weatherType}  />
                        </div>
                        <p className="WeatherInfo_Type">{weatherType}</p>
                        <h3 className="Label">current temperature:</h3>
                        <p className="WeatherInfo_Temperature">{currentTemp}</p>
                    </div>

                    <div className="WeatherInfo_Extra">
                        <div className="WeatherInfo_Extra_Column">
                            <h3 className="Label">high temperature:</h3>
                            <p className="WeatherInfo_Temperature_Small">{highTemp}</p>
                            <h3 className="Label">low temperature: </h3> 
                            <p className="WeatherInfo_Temperature_Small">{lowTemp}</p>
                        </div>
                        <div className="WeatherInfo_Extra_Column">
                            <h3 className="Label">cloudiness:</h3>
                            <p>{cloudiness}</p>
                            <h3 className="Label">humidity:</h3>
                            <p>{humidity}</p>
                            <h3 className="Label">wind speed:</h3>
                            <p>{windSpeed}</p>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}

export default Home;