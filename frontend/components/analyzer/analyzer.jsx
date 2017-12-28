import React from 'react';

class Analyzer extends React.Component {
  constructor (props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //whenever the userInputData changes, I want to make a new request. Implement later.

  componentWillReceiveProps(newProps) {

  }

  componentWillUpdate() {
    document.getElementsByClassName('analyze-button')[0].disabled = '';
  }

  handleSubmit(e) {
    this.props.requestMajorChordName([this.props.userInputData]);
    document.getElementsByClassName('analyze-button')[0].disabled = 'true';
  }


  render() {
    const prediction = this.props.prediction.response;

    return (
      <div className="analyzer-div">
          <button className="analyze-button" type="button"
                  onClick={this.handleSubmit}>Submit</button>
          <span className="analysis-result">{prediction || 'Press Submit'}</span>
            <p> Click the piano keys, and then press SUBMIT.</p>
            <p> A neural network will tell you what chord is being played.</p>
            <p> Sorry, only major chords and extensions supported right now. More coming soon!</p>
              <a href="https://github.com/Adrianjewell91/theorizer">Github</a>
                <a href="https://github.com/Adrianjewell91/first_neural_network">Neural Network</a>

      </div>
    )
  }
}

export default Analyzer;
