import React from 'react';
import HeyArnoldCharacters from '../../containers/heyArnoldCharacters';
import CharacterDetailPage from '../../containers/detailContainer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={(routerProps) => <HeyArnoldCharacters {...routerProps} />}
          />
          <Route
            path="/:id"
            exact
            render={(routerProps) => <CharacterDetailPage {...routerProps} />}
          />
        </Switch>
      </Router>
    </div>
  );
}
