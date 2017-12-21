import React from 'react';

class Analyzer extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    const prediction = this.props.prediction.response;
    return (
      <div className="score-render-div">
        <iframe src="https://flat.io/embed/56ae21579a127715a02901a6?layout=responsive&audioSource=&videoPosition=" height="450" width="100%" frameBorder="0" allowfullscreen></iframe>
      </div>
    )
  }
}

export default Analyzer;


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
