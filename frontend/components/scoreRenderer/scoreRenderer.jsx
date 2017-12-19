import React from 'react';

class Analyzer extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    const prediction = this.props.prediction.response;
    return (
      <div className="score-render-div">
          <p>Instructions:</p>
          <p className="Instructions">
            Click the piano keys, and then press submit. <br/><br/>
            A dense neural network (with one hidden layer), will tell you what chord is being played. <br/><br/>
            Right now, it only knows majors chords. <br/><br/>
            It can handle a few novel variations (open positions, and a few extensions). <br/><br/>

            In the future, a score would go in place of these instructions. <br/><br/>

            <a href="https://github.com/Adrianjewell91/theorizer">Github</a> <br/>
            <a href="https://github.com/Adrianjewell91/first_neural_network">Neural Network Explanation and Code</a> <br/>

            <br/>
          </p>
      </div>
    )
  }
}

export default Analyzer;
