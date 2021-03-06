/* eslint-disable no-console */
import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import styles from './App.module.css';
import Homepage from '../Homepage/Homepage';
import Weather from '../Weather/Weather';
import Retro from '../Retro/Retro';
import Todos from '../Todos/Todos';

const App = () => {
  console.log('🚀 App component render 🚀');

  return (
    <BrowserRouter>
      <div className={styles.App}>
        <nav className={styles.header}>
          <h1 className={styles.heading}>
            <NavLink to="/">Routing</NavLink>
          </h1>
          <ul className={styles.menu}>
            <li>
              <NavLink
                to="/weather"
                className={styles.link}
                activeStyle={{ fontWeight: 'bold' }}
              >
                Weather
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/retro"
                className={styles.link}
                activeStyle={{ fontWeight: 'bold' }}
              >
                Retrospective
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/todos"
                className={styles.link}
                activeStyle={{ fontWeight: 'bold' }}
              >
                Todos
              </NavLink>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/weather">
            <Weather />
          </Route>
          <Route path="/retro">
            <Retro />
          </Route>
          <Route path="/todos">
            <Todos />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
