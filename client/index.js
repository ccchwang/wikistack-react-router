import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';
import { receivePages, selectPage } from './redux/action-creators';

import AddPageContainer from './react/AddPageContainer';
import PagesContainer from './react/PagesContainer';
import SinglePage from './react/SinglePage';
import Layout from './react/Layout';

import axios from 'axios';


const fetchPages = () => {
  axios.get('/api/wiki')
       .then(pages => store.dispatch(receivePages(pages.data)))
       .catch(console.error)
}

const fetchPage = (nextState, replace, done) => {
  axios.get(`/api/wiki/${nextState.params.title}`)
       .then(page => store.dispatch(selectPage(page.data)))
       .then(() => done())
       .catch(console.error)
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Layout}>
        <Route path="/wiki" component={PagesContainer} onEnter={fetchPages}/>
        <Route path="/wiki/add" component={AddPageContainer} />
        <Route path="/wiki/:title" component={SinglePage} onEnter={fetchPage}/>
        <IndexRedirect to="/wiki" />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
