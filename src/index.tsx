import * as React from 'react';
import * as ReactDOM from "react-dom";

import App from './App';

var html = document.querySelector('html');
var body = document.querySelector('body');
var app = document.getElementById("app");

if (html) {
  html.style.height = '100%';
}

if (body) {
  body.style.margin = '0px';
  body.style.width = '100%';
  body.style.height = '100%';
}

if (app) {
  app.style.height = '100%';
  app.style.height = '100%';
}

ReactDOM.render(<App />, app);
