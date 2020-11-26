import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Components/home'
import Page from './Components/page'
import About from './Components/about'
import Header from './Components/header'
import { config } from './config'

function APage(props) {
  return (
    <Route path={`/${props.tool.meta.path}`}>
      <Page config={props.tool} />
    </Route>
  )
}

function Render(props) {
  let out = []
  const array = Object.keys(props.tools)
  for (let i = 0; i < array.length; i++) {
    out.push(
      <APage tool={props.tools[array[i]]} />
    )
  }
  return out
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path='/'>
        <Home config={config.homeInfo} />
      </Route>

      <Route path='/about' component={About} />

      <Render tools={config.tools} />

    </BrowserRouter>
  );
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);