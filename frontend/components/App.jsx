import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

import KeyboardContainer from "./keyboard/keyboardContainer";
import NavBarContainer from './navBar/navBarContainer';

const App = () => (
    <div>
      <NavBarContainer/>
      <KeyboardContainer/>
    </div>
);

export default App;
