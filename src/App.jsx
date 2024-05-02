import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CatLists } from './components/CatLists';
import { Header } from './components/Header';

export function App() {
  return (
    <Router>
      <div className="w-full flex flex-col justify-center items-center m-auto">
        <Header />
        <Route path="/cats" component={CatLists} />
      </div>
    </Router>
  );
}