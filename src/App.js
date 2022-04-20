import React from 'react';
import './App.css';
import CardsList from './pages/cardsList/cardsList';
import NewCard from './pages/newCard/newCard';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/CardsList" element={<CardsList />} />
        <Route path="/NewCard" element={<NewCard />} />
      </Routes>
    </div>
  );
}

export default App;
