import React from "react";

import Header from "../components/Header";

const weatherKey = `c192e7c68ea0a788e86845763d2aa2ed`;

function Home() {
    /* 
    DISPLAYS:
    Weather Type (ex. Cloudy)
    Current Temperature
    High Temperature
    Low Temperature
    Cloudiness
    Humidity
    Wind Speed
    */
    return(
        <>
            <Header />
            <main className="Home">
                <h2>Weather in Jakarta</h2>
                <div className="WeatherInfo">
                    <p> Weather Type: Cloudy </p>
                    <p> Current Temperature: 28 C </p>
                    <p> High Temperature: 32 C </p>
                    <p> Low Temperature: 28 C</p>
                    <p> Cloudiness: 100 </p>
                    <p> Humidity: 80% </p>
                    <p> Windspeed: 5 km/h </p>
                </div>
            </main>

        </>
    );
}

export default Home;