/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import styles from './Retro.module.css';
import Board from '../Board/Board';
import config from '../config';

class Retro extends React.Component {
  render() {
    const { BOARDS } = config;

    return (
      <div className={styles.Retro}>
        <div className={styles.top}>
          <h2 className={styles.heading}>Team Retrospective</h2>
        </div>

        <div className={styles.wrapper}>
          {BOARDS.map(({ id, title, color }) => (
            <Board key={id} boardTitle={title} boardColor={color} />
          ))}
        </div>
      </div>
    );
  }
}

export default Retro;
