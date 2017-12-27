import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Nav from './components/Nav';
import MainPage from './components/MainPage';
import PageWithCssStagger from './components/PageWithCssStagger';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Route path="/" exact component={MainPage} />
        <Route path="/stagger" exact component={PageWithCssStagger} />
      </div>
    );
  }
}

export default App;
