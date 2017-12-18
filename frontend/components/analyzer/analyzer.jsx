import React from 'react';

class Analyzer extends React.Component {
  constructor (props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //whenever the userInputData changes, I want to make a new request.
  //

  handleSubmit() {
    console.log('analzer button - should work soon.');
    this.props.requestMajorChordName([this.props.userInputData]);
  }

  render() {
    const prediction = this.props.prediction.response
    return (
      <div className="analyzer-div">
        <button type="button" onClick={this.handleSubmit}>Submit a query to neural network</button>
        <div>
          Current Analysis: {prediction}
        </div>
      </div>
    )
  }
}

export default Analyzer;
