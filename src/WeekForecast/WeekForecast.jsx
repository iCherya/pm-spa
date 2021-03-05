import React from 'react';
import styles from './WeekForecast.module.css';
import DayForecast from '../DayForecast/DayForecast';
import mockedResponse from './mockedResponse';

class WeekForecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = { forecast: [], isFetched: false };
  }

  componentDidMount() {
    const { api } = this.props;
    const { base, key, type } = api;

    const url = new URL(type, base);
    url.searchParams.set('city', 'Kyiv');
    url.searchParams.set('key', key);

    fetch(url.href)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ forecast: data.data, isFetched: true });
      })
      .catch(() => {
        this.setState({
          forecast: mockedResponse.data,
          isFetched: true
        });
      });
  }

  render() {
    const { forecast, isFetched } = this.state;
    const { daysToShow } = this.props;

    return (
      <div className={styles.week}>
        <ul className={styles.list}>
          {!isFetched ? (
            <li>Uploading week forecast...</li>
          ) : (
            forecast
              .slice(0, daysToShow)
              .map((day) => <DayForecast key={day.ts} data={day} />)
          )}
        </ul>
      </div>
    );
  }
}

export default WeekForecast;
