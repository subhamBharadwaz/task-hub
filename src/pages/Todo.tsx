
import { useSelector } from 'react-redux';


import type { RootState } from '../store';
import styles from '../features/todo/styles/Todo.module.css';
import TodoInput from '../features/todo/components/TodoInput';
import TodoList from '../features/todo/components/TodoList';

const Index = () => {
  const tasks = useSelector((state: RootState) => state.todo.tasks);
  const completedCount = tasks.filter(task => task.completed).length;
  const totalCount = tasks.length;

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>   
        <div className={styles.mainCard}>
          <div className={styles.content}>    
            <TodoInput />    
            {totalCount > 0 && (
              <div className={styles.progressContainer}>
                <div className={styles.progressText}>
                  Progress: {completedCount} of {totalCount} completed
                </div>
                <div className={styles.progressBar}>
                  <div 
                    className={styles.progressFill}
                    style={{ width: `${totalCount > 0 ? (completedCount / totalCount) * 100 : 0}%` }}
                  />
                </div>
              </div>
            )}    
            <TodoList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;