import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/app/App';
import './index.css';

import createBrowserHistory from 'history/createBrowserHistory';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
	
const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <div>
      <Route exact path='/' component={App}/>
      <Route path='/app' component={App}/>
    </div>
  </Router>,
  document.getElementById('root')
);
