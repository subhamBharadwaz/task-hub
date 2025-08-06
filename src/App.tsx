import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AppHome.module.css';

const App: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.title}>Welcome to TaskHub</h1>
      <p className={styles.description}>
        TaskHub is your all-in-one productivity dashboard. Manage your tasks efficiently and explore GitHub user profiles with ease.
      </p>
      <div className={styles.buttonGroup}>
        <button className={styles.button} onClick={() => navigate('/todo')}>
          To-Do App
        </button>
        <button className={styles.button} onClick={() => navigate('/github')}>
          GitHub Dashboard
        </button>
      </div>
    </div>
  );
};

export default App;
