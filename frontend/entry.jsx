import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

import {getChordName} from './util/neural_net'


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  window.get = getChordName();
  ReactDOM.render(<Root/>, root);
});
