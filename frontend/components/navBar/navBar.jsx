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

// <p> Click the piano keys, and then press submit. A neural network will tell you what chord is being played.
//   <a href="https://github.com/Adrianjewell91/theorizer">Github</a>
//     <a href="https://github.com/Adrianjewell91/first_neural_network">Neural Network</a>
//     </p>
// <p>Instructions:</p>
//   <p className="Instructions">
//     Click the piano keys, and then press submit. <br/><br/>
//     A neural network will tell you what chord is being played. <br/><br/>
//     Right now, it only knows MAJOR chords. <br/><br/>
//     It can handle a few novel variations (open positions, and some extensions). <br/><br/>
//
//     In the future, a score would go in place of these instructions. <br/><br/>
//
//     <a href="https://github.com/Adrianjewell91/theorizer">Github</a> <br/>
//       <a href="https://github.com/Adrianjewell91/first_neural_network">Neural Network</a> <br/>
//
//         <br/>
//         </p>
