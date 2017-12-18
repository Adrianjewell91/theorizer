import React from 'react';

class Analyzer extends React.Component {
  constructor (props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //whenever the userInputData changes, I want to make a new request. Implement later.

  componentWillReceiveProps(newProps) {
    if (this.props.userInputData !== newProps.userInputData) {
        this.props.requestMajorChordName([newProps.userInputData]);
    }
  }

  handleSubmit(e) {
    this.props.requestMajorChordName([this.props.userInputData]);
  }


  render() {
    const prediction = this.props.prediction.response;

    return (
      <div className="analyzer-div">
          <button className="analyze-button" type="button" onClick={this.handleSubmit}>Submit</button>
          <span className="analysis-result">{prediction}</span>
      </div>
    )
  }
}

export default Analyzer;
