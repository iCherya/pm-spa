/* eslint-disable no-console */
import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import styles from './App.module.css';
import Weather from '../Weather/Weather';
import Retro from '../Retro/Retro';

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
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

function Home() {
  return (
    <div>
      <h2>HOMEPAGE</h2>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis saepe
        labore nam minima quos earum vero eum pariatur amet aliquid itaque minus
        eveniet, natus eaque, voluptatum sunt vitae harum, sint doloribus ad
        tenetur illo soluta voluptatem? Labore fuga ipsa eum laborum mollitia
        deserunt. Sapiente distinctio, quos eum esse maiores quo.
      </div>
    </div>
  );
}

function Todos() {
  return (
    <div>
      <h2>Todos</h2>
    </div>
  );
}

export default App;
