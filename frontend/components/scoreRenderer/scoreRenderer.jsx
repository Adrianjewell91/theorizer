import React from 'react';

class Analyzer extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    const prediction = this.props.prediction.response;
    return (
      <div className="score-render-div">
        <iframe className="score-iframe" src="https://flat.io/embed/56ae21579a127715a02901a6?layout=responsive&audioSource=&videoPosition=" height="450px" width="100%" frameBorder="0" allowFullScreen></iframe>
      </div>
    )
  }
}

export default Analyzer;
