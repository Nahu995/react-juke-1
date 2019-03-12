import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom';
import ReactDOM,{render} from 'react-dom'
import Main from './containers/Main'

ReactDOM.render(
  <BrowserRouter>
    <Route path="/" component={Main} />
  </BrowserRouter>, document.getElementById('app')
);