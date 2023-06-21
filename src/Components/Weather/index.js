import { useState } from 'react';
import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { WiCelsius } from 'react-icons/wi';
import { RiMapPinFill } from 'react-icons/ri';
import ForecastWeatherItem from '../ForecastWeatherItem';

import styles from './Weather.module.scss';
import requestforecastWeather from '../../api/forecastWeatherService';
const cx = classNames.bind(styles);

function Weather() {
    const [weatherForecast, setWeatherForecast] = useState(null);

    const q = '10.810583, 106.709145';
    useEffect(() => {
        const fetchWeatherApi = async (q, days) => {
            const res = await requestforecastWeather(q, days);
            setWeatherForecast(res);
        };
        fetchWeatherApi(q, 3);
    }, []);

    const { current, location, forecast } = weatherForecast !== null ? weatherForecast : '';
    return (
        <>
            <div className={cx('weather-header')}>
                <div className="weather-place-temp">
                    <h4 className={cx('location')}>
                        <RiMapPinFill className={cx('icon')} />
                        <span>{weatherForecast && location.name}</span>
                    </h4>
                    <span className={cx('degree')}>
                        +{weatherForecast && current.temp_c}
                        <WiCelsius />
                    </span>
                </div>
                <div className={cx('weather-status-box')}>
                    <span className={cx('weather-status-icon')}>
                        <img src={weatherForecast && current.condition.icon} alt="" />
                    </span>
                    <p className={cx('weather-status')}>{weatherForecast && current.condition.text}</p>
                </div>
            </div>
            <p className={cx('last-update')}>Last Updated: {weatherForecast && current.last_updated}</p>
            <div className={cx('forecast-weather-container')}>
                {weatherForecast &&
                    forecast.forecastday.map((ele, idx) => {
                        return <ForecastWeatherItem data={ele} key={idx} />;
                    })}
            </div>
        </>
    );
}

export default Weather;
