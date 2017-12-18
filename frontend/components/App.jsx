import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

import KeyboardContainer from "./keyboard/keyboardContainer";

const App = () => (
    <div>
      <h1>Theorizer - Analyze Music with a Neural Network.</h1>
      <KeyboardContainer/>
    </div>
);

export default App;
