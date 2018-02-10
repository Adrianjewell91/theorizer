import React from 'react';

class Analyzer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {disabled: undefined};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //whenever the userInputData changes, I want to make a new request. Implement later.
  //is there another way to handle the toggling?
  //Probably by writing a button component, and then assigning a "disabled" key to the local state.
  //Change the state when clicked.
  componentWillReceiveProps(newProps) {
    this.setState({disabled: undefined});
  }

  componentWillUpdate() {
    // document.getElementsByClassName('analyze-button')[0].disabled = '';

  }

  handleSubmit(e) {
    this.props.requestMajorChordName([this.props.userInputData]);
    // document.getElementsByClassName('analyze-button')[0].disabled = 'true';
    this.setState({disabled:true});
  }


  render() {
    const prediction = this.props.prediction.response;

    return (
      <div className="analyzer-div">
          <button className="analyze-button" type="button"
                  onClick={this.handleSubmit}
                  disabled={this.state["disabled"]}>Discover</button>
                <span className="analysis-result">{prediction || '--'}</span>
      </div>
    )
  }
}

export default Analyzer;
