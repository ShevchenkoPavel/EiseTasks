import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';

import { newStore } from './stores/store';
	
import Layout from './components/layout/layout';

import Todo from './pages/todo/todo';
import Later from './pages/later/later';
import Done from './pages/done/done';

import './index.css';	
	


const history = createBrowserHistory();
const store = newStore();

ReactDOM.render(
 <Provider store={store}>
  <Router history={history}>
	
    <Layout>
	  <Redirect exact from='/' to='/todo' />
      <Route exact path='/' component={Todo}/>
	
	  <Route path='/todo' component={Todo}/>
	  <Route path='/later' component={Later}/>
	  <Route path='/done' component={Done}/>
	
    </Layout>
	
  </Router>
</Provider>,
  document.getElementById('root')
);
