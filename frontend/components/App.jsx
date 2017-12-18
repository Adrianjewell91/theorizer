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
import AnalyzerContainer from './analyzer/analyzerContainer';

const App = () => (
    <div>
      <NavBarContainer/>
      <AnalyzerContainer/>
      <KeyboardContainer/>
    </div>
);

export default App;
