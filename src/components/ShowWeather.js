import React from "react";
import "./ShowWeather.css";
import { WiHumidity } from "react-icons/wi";
import { GiPressureCooker, GiSpeedometer } from "react-icons/gi";
const ShowWeather = ({ weather }) => {
    return (
        <div className="cardbox">
            <div>
                <div className="top">
                    <div>
                        <h2 style={{ fontFamily: "cursive" }}>
                            {weather.name}
                        </h2>
                    </div>
                    <div className="item">
                        <h3 style={{ margin: "0px" }}>Country</h3>
                        <p style={{ margin: "0px" }}>{weather.country}</p>
                    </div>
                </div>
                <div className="middle">
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <div>
                            <h1>{weather.temp}°C</h1>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <img
                                src={`http://openweathermap.org/img/w/${weather.icon}.png`}
                                alt="Weather icon"
                            />
                            <p style={{ marginTop: "0px" }}>
                                {weather.weatherType}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="end">
                    <div className="item">
                        <p style={{ margin: "5px" }}>Humidity</p>
                        <p className="element">
                            <span>{weather.humidity} </span>
                            <WiHumidity size={20} />
                        </p>
                    </div>
                    <div className="item">
                        <p style={{ margin: "5px" }}> Pressure</p>
                        <p className="element">
                            <span>{weather.pressure}</span>
                            <GiPressureCooker size={20} />
                        </p>
                    </div>
                    <div className="item">
                        <p style={{ margin: "5px" }}> Wind speed </p>
                        <p className="element">
                            <span>{weather.windSpeed}</span>
                            <GiSpeedometer size={20} />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowWeather;
