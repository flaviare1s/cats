import React from 'react';
import { GlobalProvider } from './GlobalContext.jsx';
import { App } from './App.jsx';
import { Route } from 'react-router-dom';
import { CatLists } from './components/CatLists.jsx';

const AppWithRoutes = (
  <GlobalProvider>
    <Route exact path="/" component={App} />
    <Route path="/login" component={() => <div>Testando rotas</div>} />
    <Route path="/cats" component={CatLists} />
  </GlobalProvider>
);

export default AppWithRoutes;
