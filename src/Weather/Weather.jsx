/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import styles from './Weather.module.css';
import WeekForecast from '../WeekForecast/WeekForecast';
import config from '../config';

class App extends React.Component {
  render() {
    const { API, DAYS_TO_SHOW } = config;

    return (
      <div className={styles.Weather}>
        <h2>Weather App</h2>
        <WeekForecast api={API} daysToShow={DAYS_TO_SHOW} />
      </div>
    );
  }
}

export default App;
