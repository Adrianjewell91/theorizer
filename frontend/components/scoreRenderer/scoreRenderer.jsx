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
          <p>
            Click the piano keys, and then press submit. <br/>
            A neural network, will tell you what chord is being played. <br/>
            Right now, it only knows majors chords. <br/>
            It can handle a few novel variations (open positions, and a few extensions). <br/>

            In the future, a score would go here. <br/>
            Future plans include a score render, and a method to train the network
            from the browser.

            https://github.com/Adrianjewell91/theorizer <br/>
            https://github.com/Adrianjewell91/first_neural_network
          </p>
      </div>
    )
  }
}

export default Analyzer;
