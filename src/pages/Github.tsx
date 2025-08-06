import React, { useState } from 'react';


import styles from '../features/github/styles/Github.module.css';
import GithubSearch from '../features/github/components/GithubSearch';
import GithubUserCard from '../features/github/components/GithubUserCard';

interface GithubUser {
  avatar_url: string;
  name: string;
  login: string;
  bio: string;
  location: string;
  followers: number;
  public_repos: number;
}

const Github: React.FC = () => {
  const [user, setUser] = useState<GithubUser | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const searchUser = async (username: string) => {
    if (!username.trim()) {
      setError('Please enter a username');
      setUser(null);
      setHasSearched(true);
      return;
    }

    setLoading(true);
    setError(null);
    setHasSearched(true);

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('User not found');
        } else {
          throw new Error('Failed to fetch user data');
        }
      }

      const userData: GithubUser = await response.json();
      setUser(userData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h2>GitHub User Search</h2>
      <GithubSearch onSearch={searchUser} />
      
      {loading && (
        <div className={styles.loading}>
          <p>Loading...</p>
        </div>
      )}
      
      {error && (
        <div className={styles.error}>
          <p>{error}</p>
        </div>
      )}
      
      {!hasSearched && (
        <div className={styles.defaultMessage}>
          <p>Search a GitHub user to get started</p>
        </div>
      )}
      
      {user && !loading && !error && (
        <GithubUserCard user={user} />
      )}
    </div>
  );
};

export default Github; 