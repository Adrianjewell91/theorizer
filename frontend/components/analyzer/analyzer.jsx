import React from 'react';

class Analyzer extends React.Component {
  constructor (props) {
    super(props);
  }

  handleSubmit() {
    //dummy data for now.
    console.log('analzer button - should work soon.');
    // const data = [0, 1, 0, 0, 0,  1,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0,  0,  0,  0,  0,  1,  0,  0,  1,  0,  0,  0,  0,  1,  0,  0,];
    // this.props.requestMajorChordName([this.state.data]);
  }

  render() {
    return (
      <div className="analyzer-div">
        <button type="button" onClick={this.handleSubmit}>Submit a query to neural network</button>

      </div>
    )
  }
}

export default Analyzer;
