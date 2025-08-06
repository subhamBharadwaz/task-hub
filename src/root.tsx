import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Todo from './pages/Todo';
import Github from './pages/Github';
import { Provider } from 'react-redux';
import { store } from './store';
import Layout from './components/layout';

const Root: React.FC = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/github" element={<Github />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </Provider>
);

export default Root;