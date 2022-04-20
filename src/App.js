import React from 'react';
import './App.css';
import CardsList from './pages/cardsList/cardsList';
import NewCard from './pages/newCard/newCard';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/blog/" element={<CardsList />} />
        <Route path="/blog/NewCard" element={<NewCard />} />
      </Routes>
    </div>
  );
}

export default App;
