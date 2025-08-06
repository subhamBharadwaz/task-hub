import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface Task {
  id: string;
  text: string;
  completed: boolean;
}

interface TodoState {
  tasks: Task[];
}

const initialState: TodoState = {
  tasks: [
    { id: '1', text: 'Learn React', completed: true },
    { id: '2', text: 'Build a To-Do App', completed: false },
    { id: '3', text: 'Master Redux Toolkit', completed: false },
  ],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      state.tasks.unshift({ 
        id: Date.now().toString(), 
        text: action.payload,
        completed: false 
      });
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    toggleTask: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find(task => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});

export const { addTask, deleteTask, toggleTask } = todoSlice.actions;
export default todoSlice.reducer;