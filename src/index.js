import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/app';
import reducers from './reducers';
import { AUTH_USER } from './actions/type';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';
import Dashboard from './components/dashboard';
// import RequireAuth from './components/auth/require_auth';

const createStoreWithMiddleware = applyMiddleware( reduxThunk )(createStore);
const store = createStoreWithMiddleware(reducers);

const token = localStorage.getItem('token');

if ( token ) {
    store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
    <Provider store={ store }>
        <Router>
            <Switch>
                <Route path="/" component={App} />
                <Route exact path="/signin" component={Signin} />
                <Route exact path="/signout" component={Signout} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/dashboard" component={ Dashboard } />
            </Switch>
        </Router>
    </Provider>
    , document.getElementById('root')
);





