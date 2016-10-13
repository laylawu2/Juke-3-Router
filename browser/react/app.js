'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import AppContainer from './containers/AppContainer'
import routes from './routes.js'
import { Router, Route, hashHistory, Link, IndexRedirect} from 'react-router'
import Main from './components/Main'
import AlbumContainer from './containers/AlbumContainer'
import ArtistsContainer from './containers/ArtistsContainer'
import AlbumsContainer from './containers/AlbumsContainer'

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/'component={AppContainer}>
        <IndexRedirect to='/albums'/>
        <Route path='/albums'component={AlbumsContainer} />
        <Route path='/artists' component={ArtistsContainer} />
        <Route path="/albums/:albumId" component={AlbumContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
