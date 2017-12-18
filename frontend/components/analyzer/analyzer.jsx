import React from 'react';

class Analyzer extends React.Component {
  constructor (props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

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
          {prediction}
        </div>
      </div>
    )
  }
}

export default Analyzer;
