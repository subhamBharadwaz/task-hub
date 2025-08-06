# TaskHub

A modern, fully responsive productivity dashboard built with React, Redux Toolkit, and Vite.

## Features

- 📝 **To-Do App**: Add, complete, delete, and search tasks with a beautiful, mobile-friendly UI.
- 🔍 **GitHub User Search**: Instantly search for any GitHub user and view their public profile, followers, and repositories.
- 📱 **Responsive Design**: Looks and works great on all devices.

## Tech Stack

- React (Vite)
- Redux Toolkit
- React Router
- CSS Modules with design tokens

## Getting Started

1. **Install dependencies:**
   ```sh
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

2. **Run the development server:**
   ```sh
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   ```

3. **Open your browser:**
   - Visit [http://localhost:5173](http://localhost:5173)

## Project Structure

`src/
components/ # Layout, Navbar, shared UI
features/
todo/ # To-Do app logic and styles
github/ # GitHub dashboard logic and styles
pages/ # Page-level components
store.ts # Redux store setup
index.css # Global styles and design tokens`

## About

TaskHub is designed to showcase modern React best practices, including:
- Clean code structure
- State management with Redux Toolkit
- Routing with React Router
- API integration with fetch
- Fully responsive, accessible, and visually appealing UI

