import React from 'react';

class Keyboard extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    console.log("at handlesubmit");
  }

  render () {
    return (
      <div>
        Keys go here.
        <button type="button" onClick={this.handleSubmit}>Submit a query to neural network</button>
      </div>
    )
  }
}

export default Keyboard;
