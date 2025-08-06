import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Plus } from 'lucide-react';
import { addTask } from '../todoSlice';
import styles from '../styles/TodoInput.module.css';

const TodoInput: React.FC = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTask(text.trim()));
      setText('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Add a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyPress}
        className={styles.input}
      />
      <button 
        onClick={handleAdd}
        className={styles.addButton}
      >
        <Plus />
        Add Task
      </button>
    </div>
  );
};

export default TodoInput;