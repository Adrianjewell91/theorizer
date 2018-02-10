import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  //for bootstrapping the user.
  let store;
  if (process) {console.log(window.location)} else {console.log('no process')}

  // if (window.currentUser) {
  //   const preloadedState = { session: { currentUser: window.currentUser } };
  //   store = configureStore(preloadedState);
  //   delete window.currentUser;
  // } else {
  store = configureStore();
  // }

  window.store = store;
  ReactDOM.render(<Root store={store}/>, root);
});
