import React from 'react';
import './App.css';
import CardsList from './pages/cardsList/cardsList';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/CardsList" element={<CardsList />} />
      </Routes>
    </div>
  );
}

export default App;
