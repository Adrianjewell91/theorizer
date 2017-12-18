import React from 'react';

class NavBar extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div className="nav-header-div">
        <div className="nav-logo"></div>

        <h1 className="nav-header">Theorizer - Analyze Music with a Neural Network.</h1>

        <div className="nav-session-buttons"></div>
      </div>
    )
  }
}

export default NavBar;