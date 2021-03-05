import React from 'react';
import styles from './App.module.css';

const App = () => {
  console.log('🚀 App component render 🚀');

  return (
    <div className={styles.App}>
      <div className={styles.top}>
        <h1 className={styles.heading}>React HW3</h1>
        <ul className={styles.wrapper}>
          <li>Weather App</li>
          <li>Retrospective App</li>
          <li>Todo List</li>
        </ul>
      </div>
      <div className={styles.wrapper}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
        molestias! Illum repellat eos voluptates iste, cum veritatis magnam
        dicta asperiores nihil! Et sit ipsa quibusdam officia, facilis
        temporibus incidunt molestias dolor eius quam laboriosam veniam porro,
        delectus optio corrupti deleniti aliquid. Totam quo non vel corrupti
        illum ut maiores impedit, dolore optio nobis, earum praesentium. Animi
        amet nam nemo odit facilis? Aut quis odit ab ipsam provident eaque
        natus? Nobis dolores cupiditate quas rem quasi nisi distinctio impedit
        sequi ut. Corporis, amet repellendus recusandae et voluptatibus totam.
        Mollitia in sapiente laudantium vel soluta placeat quis, maiores odio,
        nulla hic tempora.
      </div>
    </div>
  );
};

export default App;
