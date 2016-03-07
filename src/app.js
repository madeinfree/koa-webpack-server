import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from './routes'



ReactDOM.render(<Router routes={routes} history={browserHistory} /> ,document.getElementById('app'))
