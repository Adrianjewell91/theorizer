import React from 'react';

class Keyboard extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyToggle = this.handleKeyToggle.bind(this);
    //make sure this is 88 notes long.
    this.state = {data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
  }

  handleSubmit() {
    //dummy data for now.
    const data = [0, 1, 0, 0, 0,  1,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0,  0,  0,  0,  0,  1,  0,  0,  1,  0,  0,  0,  0,  1,  0,  0,];
    //put data in parentheses for keras formatting;
    // console.log(this.state.data);
    this.props.requestMajorChordName([this.state.data]);
  }

  //add or remove the key from the dataset upon key a press.
  //also need to select the key when pressed.
  //could potentially send a request every time key is pressed.

  handleKeyToggle() {
    //I'm leaving the id in there, may need in
    return (e) => {
      // debugger
      const newData = this.state.data;
      newData[parseInt(e.target.id)] = newData[parseInt(e.target.id)] === 0 ? 1 : 0;

      e.target.style.background = newData[parseInt(e.target.id)] === 0 ? '' : 'purple';

      // console.log(newData);
      this.setState({data: newData});
    }
  }

  render () {
    return (
      <div>
        <button type="button" onClick={this.handleSubmit}>Submit a query to neural network</button>

        <div className="keyboard-register">
          <button onClick={this.handleKeyToggle()} className="white-key" id='0'></button>
          <button onClick={this.handleKeyToggle()} className="black-key" id='1'></button>
          <button onClick={this.handleKeyToggle()} className="white-key" id='2'></button>
          <button onClick={this.handleKeyToggle()} className="white-key" id='3'></button>
          <button onClick={this.handleKeyToggle()} className="black-key" id='4'></button>
          <button onClick={this.handleKeyToggle()} className="white-key" id='5'></button>
          <button onClick={this.handleKeyToggle()} className="black-key" id='6'></button>
          <button onClick={this.handleKeyToggle()} className="white-key" id='7'></button>
          <button onClick={this.handleKeyToggle()} className="white-key" id='8'></button>
          <button onClick={this.handleKeyToggle()} className="black-key" id='9'></button>
          <button onClick={this.handleKeyToggle()} className="white-key" id='10'></button>
          <button onClick={this.handleKeyToggle()} className="black-key" id='11'></button>
          <button onClick={this.handleKeyToggle()} className="white-key" id='12'></button>
          <button onClick={this.handleKeyToggle()} className="black-key" id='13'></button>
          <button onClick={this.handleKeyToggle()} className="white-key" id='14'></button>
          <button onClick={this.handleKeyToggle()} className="white-key" id='15'></button>
          <button onClick={this.handleKeyToggle()} className="black-key" id='16'></button>
          <button onClick={this.handleKeyToggle()} className="white-key" id='17'></button>
          <button onClick={this.handleKeyToggle()} className="black-key" id='18'></button>
          <button onClick={this.handleKeyToggle()} className="white-key" id='19'></button>
          <button onClick={this.handleKeyToggle()} className="white-key" id='20'></button>
          <button onClick={this.handleKeyToggle()} className="black-key" id='21'></button>
          <button onClick={this.handleKeyToggle()} className="white-key" id='22'></button>
          <button onClick={this.handleKeyToggle()} className="black-key" id='23'></button>
          <button onClick={this.handleKeyToggle()} className="white-key" id='24'></button>
          <button onClick={this.handleKeyToggle()} className="black-key" id='25'></button>
          <button onClick={this.handleKeyToggle()} className="white-key" id='26'></button>
          <button onClick={this.handleKeyToggle()} className="white-key" id='27'></button>
          <button onClick={this.handleKeyToggle()} className="black-key" id='28'></button>
          <button onClick={this.handleKeyToggle()} className="white-key" id='29'></button>
          <button onClick={this.handleKeyToggle()} className="black-key" id='30'></button>
          <button onClick={this.handleKeyToggle()} className="white-key" id='31'></button>
          <button onClick={this.handleKeyToggle()} className="white-key" id='32'></button>
          <button onClick={this.handleKeyToggle()} className="black-key" id='33'></button>
          <button onClick={this.handleKeyToggle()} className="white-key" id='34'></button>
          <button onClick={this.handleKeyToggle()} className="black-key" id='35'></button>
          <button onClick={this.handleKeyToggle()} className="white-key" id='36'></button>
          <button onClick={this.handleKeyToggle()} className="black-key" id='37'></button>
          <button onClick={this.handleKeyToggle()} className="white-key" id='38'></button>
          <button onClick={this.handleKeyToggle()} className="white-key" id='39'></button>
          <button onClick={this.handleKeyToggle()} className="black-key" id='40'></button>
          <button onClick={this.handleKeyToggle()} className="white-key" id='41'></button>
          <button onClick={this.handleKeyToggle()} className="black-key" id='42'></button>
          <button onClick={this.handleKeyToggle()} className="white-key" id='43'></button>
          <button onClick={this.handleKeyToggle()} className="white-key" id='44'></button>
          <button onClick={this.handleKeyToggle()} className="black-key" id='45'></button>
          <button onClick={this.handleKeyToggle()} className="white-key" id='46'></button>
          <button onClick={this.handleKeyToggle()} className="black-key" id='47'></button>
          <button onClick={this.handleKeyToggle()} className="white-key" id='48'></button>
          <button onClick={this.handleKeyToggle()} className="black-key" id='49'></button>
          <button onClick={this.handleKeyToggle()} className="white-key" id='50'></button>
          <button onClick={this.handleKeyToggle()} className="white-key" id='51'></button>
          <button onClick={this.handleKeyToggle()} className="black-key" id='52'></button>
          <button onClick={this.handleKeyToggle()} className="white-key" id='53'></button>
          <button onClick={this.handleKeyToggle()} className="black-key" id='54'></button>
          <button onClick={this.handleKeyToggle()} className="white-key" id='55'></button>
          <button onClick={this.handleKeyToggle()} className="white-key" id='56'></button>
          <button onClick={this.handleKeyToggle()} className="black-key" id='57'></button>
          <button onClick={this.handleKeyToggle()} className="white-key" id='58'></button>
          <button onClick={this.handleKeyToggle()} className="black-key" id='59'></button>
          <button onClick={this.handleKeyToggle()} className="white-key" id='60'></button>
          <button onClick={this.handleKeyToggle()} className="black-key" id='61'></button>
          <button onClick={this.handleKeyToggle()} className="white-key" id='62'></button>
          <button onClick={this.handleKeyToggle()} className="white-key" id='63'></button>
          <button onClick={this.handleKeyToggle()} className="black-key" id='64'></button>
          <button onClick={this.handleKeyToggle()} className="white-key" id='65'></button>
          <button onClick={this.handleKeyToggle()} className="black-key" id='66'></button>
          <button onClick={this.handleKeyToggle()} className="white-key" id='67'></button>
          <button onClick={this.handleKeyToggle()} className="white-key" id='68'></button>
          <button onClick={this.handleKeyToggle()} className="black-key" id='69'></button>
          <button onClick={this.handleKeyToggle()} className="white-key" id='70'></button>
          <button onClick={this.handleKeyToggle()} className="black-key" id='71'></button>
          <button onClick={this.handleKeyToggle()} className="white-key" id='72'></button>
          <button onClick={this.handleKeyToggle()} className="black-key" id='73'></button>
          <button onClick={this.handleKeyToggle()} className="white-key" id='74'></button>
          <button onClick={this.handleKeyToggle()} className="white-key" id='75'></button>
          <button onClick={this.handleKeyToggle()} className="black-key" id='76'></button>
          <button onClick={this.handleKeyToggle()} className="white-key" id='77'></button>
          <button onClick={this.handleKeyToggle()} className="black-key" id='78'></button>
          <button onClick={this.handleKeyToggle()} className="white-key" id='79'></button>
          <button onClick={this.handleKeyToggle()} className="white-key" id='80'></button>
          <button onClick={this.handleKeyToggle()} className="black-key" id='81'></button>
          <button onClick={this.handleKeyToggle()} className="white-key" id='82'></button>
          <button onClick={this.handleKeyToggle()} className="black-key" id='83'></button>
          <button onClick={this.handleKeyToggle()} className="white-key" id='84'></button>
          <button onClick={this.handleKeyToggle()} className="black-key" id='85'></button>
          <button onClick={this.handleKeyToggle()} className="white-key" id='86'></button>
          <button onClick={this.handleKeyToggle()} className="white-key" id='87'></button>
        </div>

      </div>
    )
  }
}

export default Keyboard;

//How will this work?
//One select keys on a keyboard -
//Press Submit
//compile the keys into an array called data and ship it off.
//return key and print it on the screen.
//I will do this tonight. I will have the keyboard working and it will look like a keyboard.
