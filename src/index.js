import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
	
import App from './pages/app/App';
import Layout from './components/layout/layout';

import './index.css';	
	
const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <div>
      <Route exact path='/' component={App}/>
      <Route path='/app' component={App}/>
	  <Route path='/l' component={Layout}/>
	  
    </div>
  </Router>,
  document.getElementById('root')
);
