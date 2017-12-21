import React from 'react';

class Analyzer extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    const prediction = this.props.prediction.response;
    return (
      <div className="score-render-div">
        <iframe src="https://flat.io/embed/56ae21579a127715a02901a6?layout=responsive&audioSource=&videoPosition=" height="450" width="100%" frameBorder="0" allowfullscreen></iframe>
      </div>
    )
  }
}

export default Analyzer;
