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
import ScoreRendererContainer from './scoreRenderer/scoreRendererContainer';

const App = () => (
    <div>
      <NavBarContainer/>
      <div className="main-page">
        <ScoreRendererContainer/>
        <AnalyzerContainer/>
      </div>
      <KeyboardContainer/>
    </div>
);

export default App;
