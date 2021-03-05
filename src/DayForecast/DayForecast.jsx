/* eslint-disable camelcase */
import React from 'react';
import styles from './DayForecast.module.css';

class DayForecast extends React.Component {
  static getHumanDateFormat(dateString) {
    const names = {
      week: [
        'sunday',
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday'
      ],
      month: [
        'january',
        'february',
        'march',
        'april',
        'may',
        'june',
        'july',
        'august',
        'september',
        'october',
        'november',
        'december'
      ]
    };

    const dateObj = new Date(dateString);
    const weekIdx = dateObj.getDay();
    const monthIdx = dateObj.getMonth();
    const date = dateObj.getDate();
    const year = dateObj.getFullYear();

    return `${names.week[weekIdx]}, ${date} ${names.month[monthIdx]} ${year}`;
  }

  render() {
    const { data } = this.props;
    const {
      valid_date,
      wind_spd,
      wind_cdir,
      wind_cdir_full,
      wind_gust_spd,
      temp,
      max_temp,
      min_temp,
      app_max_temp,
      app_min_temp,
      rh,
      pres,
      weather,
      pop,
      vis
    } = data;
    const { description, icon } = weather;

    return (
      <li className={styles.day}>
        <h3>{DayForecast.getHumanDateFormat(valid_date)}</h3>
        <ul className={styles.results}>
          <li>
            <div className={styles.iconWrapper}>
              <img src={`/weather-icons/${icon}.png`} alt={description} />
            </div>
            <div>{description}</div>
          </li>
          <li>
            <h4>Temperature:</h4>
            <ul>
              <li>
                Average: <span>{Math.round(temp)}°</span>
              </li>
              <li>
                Minimum: <span>{Math.round(min_temp)}° </span>(
                <abbr title="Apparent/Feels Like temperature">fl:</abbr>
                <span> {Math.round(app_min_temp)}°</span>)
              </li>
              <li>
                Maximum: <span>{Math.round(max_temp)}° </span>(
                <abbr title="Apparent/Feels Like temperature">fl:</abbr>
                <span> {Math.round(app_max_temp)}°</span>)
              </li>
            </ul>
          </li>
          <li>
            <h4>Wind:</h4>
            <ul>
              <li>
                Speed: <span>{wind_spd.toFixed(2)} m/s</span>
              </li>
              <li>
                Gust speed: <span>{wind_gust_spd.toFixed(2)} m/s</span>
              </li>
              <li>
                Direction:{' '}
                <span>
                  <abbr title={wind_cdir_full}>{wind_cdir}</abbr>
                </span>
              </li>
            </ul>
          </li>
          <li>
            <h4>Other:</h4>
            <ul>
              <li>
                Humidity: <span>{rh}%</span>
              </li>
              <li>
                Pressure: <span>{Math.round(pres)}</span>
              </li>
              <li>
                Precipitation: <span>{pop}%</span>
              </li>
              <li>
                Visibility: <span>{Math.round(vis)} km</span>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    );
  }
}

export default DayForecast;
