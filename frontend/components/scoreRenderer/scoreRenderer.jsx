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
            A neural network, will tell you what chord is being played. <br/><br/>
            Right now, it only knows majors chords. <br/><br/>
            It can handle a few novel variations (open positions, and a few extensions). <br/><br/>

            In the future, a score would go here. <br/><br/>

            <a href="https://github.com/Adrianjewell91/theorizer">Github</a> <br/>
            <a href="https://github.com/Adrianjewell91/first_neural_network">Neural Network Github</a> <br/>

            <br/>

            Hosted on AWS t2.micro EC2 Instance.
          </p>
      </div>
    )
  }
}

export default Analyzer;
