import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { GlobalProvider } from './GlobalContext.jsx';
import { App } from './App.jsx';
import { CatLists } from './components/CatLists.jsx';

const AppWithRoutes = (
  <GlobalProvider>
    <Router>
      <Route exact path="/" component={App} />
      <Route path="/login" component={() => <div>Testando rotas</div>} />
      <Route path="/cats" component={CatLists} />
    </Router>
  </GlobalProvider>
);

export default AppWithRoutes;
