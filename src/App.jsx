import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { CatLists } from './components/CatLists';

export function App() {
  return (
    <Router>
      <div className="w-full flex flex-col justify-center items-center m-auto">
        <Header />
        {/* Defina a rota para /cats aqui */}
        <Route path="/cats" component={CatLists} />
      </div>
    </Router>
  );
}
