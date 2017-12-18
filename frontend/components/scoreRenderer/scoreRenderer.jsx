import React from 'react';

class Analyzer extends React.Component {
  constructor (props) {
    super(props);
  }

  handleSubmit() {

  }

  render() {
    const prediction = this.props.prediction.response
    return (
      <div className="score-render-div">
        <div>
          <h3>Instructions:</h3>
          <p>
            Click the piano keys, and then press submit. <br/>
            A neural network, will tell you what chord is being played. <br/>
            Right now, it only know majors chords. <br/>
            It can handle a few novel variations (open positions, and a few extensions). <br/>

            In the future, a score would go here. <br/>
            Future plans include a score render, and a method to train the network
            from the browser.
          </p>
        </div>
      </div>
    )
  }
}

export default Analyzer;
