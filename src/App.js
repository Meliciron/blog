import React from 'react';
import './App.css';
import CardsList from './pages/cardsList/cardsList';
import NewCard from './pages/newCard/newCard';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route
          path="https://master--dreamy-kitsune-fcfd74.netlify.app/CardsList"
          element={<CardsList />}
        />
        <Route
          path="https://master--dreamy-kitsune-fcfd74.netlify.app/NewCard"
          element={<NewCard />}
        />
      </Routes>
    </div>
  );
}

export default App;
