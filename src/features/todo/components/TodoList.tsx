import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from '../todoSlice';
import styles from '../styles/TodoList.module.css';
import type { RootState } from '../../../store';

const TodoList: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.todo.tasks);
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const filteredTasks = tasks.filter(task =>
    task.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.list}>
      <div className={styles.searchBarContainer}>
        <input
          className={styles.searchBar}
          type="text"
          placeholder="Search tasks..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      {filteredTasks.map((task) => (
        <div className={styles.taskCard} key={task.id}>
          <div className={styles.taskContent}>
            <button
              className={
                task.completed
                  ? `${styles.toggleButton} ${styles.completed}`
                  : `${styles.toggleButton} ${styles.incomplete}`
              }
              onClick={() => dispatch(toggleTask(task.id))}
              aria-label={task.completed ? 'Mark as incomplete' : 'Mark as complete'}
            >
              {task.completed ? (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="9" stroke="#7C3AED" strokeWidth="2"/><path d="M6 10.5L9 13.5L14 8.5" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="9" stroke="#A1A1AA" strokeWidth="2"/></svg>
              )}
            </button>
            <span
              className={
                task.completed
                  ? `${styles.taskText} ${styles.completed}`
                  : `${styles.taskText} ${styles.incomplete}`
              }
            >
              {task.text}
            </span>
            <button className={styles.deleteButton} onClick={() => dispatch(deleteTask(task.id))}>
              Delete
            </button>
          </div>
        </div>
      ))}
      {filteredTasks.length === 0 && (
        <div className={styles.emptyState}>No tasks found.</div>
      )}
    </div>
  );
};

export default TodoList;