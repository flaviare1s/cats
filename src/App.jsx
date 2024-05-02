import React from 'react';
import { Header } from './components/Header';
import { BrowserRouter as Route } from 'react-router-dom';
import { CatLists } from './components/CatLists';

export function App() {
  return (
    <div className="w-full flex flex-col justify-center items-center m-auto">
      <Header />
      <Route path="/cats" component={CatLists} />
    </div>
  );
}
