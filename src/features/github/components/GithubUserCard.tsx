import React from 'react';
import styles from '../styles/GithubUserCard.module.css';

interface GithubUser {
  avatar_url: string;
  name: string;
  login: string;
  bio: string;
  location: string;
  followers: number;
  public_repos: number;
}

interface GithubUserCardProps {
  user: GithubUser;
}

const GithubUserCard: React.FC<GithubUserCardProps> = ({ user }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img 
          src={user.avatar_url} 
          alt={`${user.name || user.login} avatar`}
          className={styles.avatar}
        />
        <div className={styles.userInfo}>
          <h3 className={styles.name}>{user.name || user.login}</h3>
          {user.name && <p className={styles.username}>@{user.login}</p>}
        </div>
      </div>
      
      {user.bio && (
        <div className={styles.bio}>
          <p>{user.bio}</p>
        </div>
      )}
      
      <div className={styles.details}>
        {user.location && (
          <div className={styles.detail}>
            <span className={styles.label}>Location:</span>
            <span>{user.location}</span>
          </div>
        )}
        
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.number}>{user.followers}</span>
            <span className={styles.label}>Followers</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.number}>{user.public_repos}</span>
            <span className={styles.label}>Public Repos</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GithubUserCard; 