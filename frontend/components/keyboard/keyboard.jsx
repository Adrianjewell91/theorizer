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
    return (e) => {
      // debugger
      const newData = this.state.data;
      newData[parseInt(e.target.id)] = newData[parseInt(e.target.id)] === 0 ? 1 : 0;

      if (e.target.classList.value === "white") {
        e.target.style.background = newData[parseInt(e.target.id)] === 0 ? '' : 'purple';
      } else {
        if (newData[parseInt(e.target.id)] === 0) {
          e.target.classList.add("black")
          e.target.classList.remove("selected")
        } else  {
          e.target.classList.add("selected")
          e.target.classList.remove("black")
        }
      }
      console.log(newData);
      this.setState({data: newData});
    }
  }

  render () {
    return (
      <div>
        <button type="button" onClick={this.handleSubmit}>Submit a query to neural network</button>

        <div className="keyboard-register">
          <button onClick={this.handleKeyToggle()} className="white" id='0'></button>
          <button onClick={this.handleKeyToggle()} className="black" id='1'></button>
          <button onClick={this.handleKeyToggle()} className="white" id='2'></button>
          <button onClick={this.handleKeyToggle()} className="white" id='3'></button>
          <button onClick={this.handleKeyToggle()} className="black" id='4'></button>
          <button onClick={this.handleKeyToggle()} className="white" id='5'></button>
          <button onClick={this.handleKeyToggle()} className="black" id='6'></button>
          <button onClick={this.handleKeyToggle()} className="white" id='7'></button>
          <button onClick={this.handleKeyToggle()} className="white" id='8'></button>
          <button onClick={this.handleKeyToggle()} className="black" id='9'></button>
          <button onClick={this.handleKeyToggle()} className="white" id='10'></button>
          <button onClick={this.handleKeyToggle()} className="black" id='11'></button>
          <button onClick={this.handleKeyToggle()} className="white" id='12'></button>
          <button onClick={this.handleKeyToggle()} className="black" id='13'></button>
          <button onClick={this.handleKeyToggle()} className="white" id='14'></button>
          <button onClick={this.handleKeyToggle()} className="white" id='15'></button>
          <button onClick={this.handleKeyToggle()} className="black" id='16'></button>
          <button onClick={this.handleKeyToggle()} className="white" id='17'></button>
          <button onClick={this.handleKeyToggle()} className="black" id='18'></button>
          <button onClick={this.handleKeyToggle()} className="white" id='19'></button>
          <button onClick={this.handleKeyToggle()} className="white" id='20'></button>
          <button onClick={this.handleKeyToggle()} className="black" id='21'></button>
          <button onClick={this.handleKeyToggle()} className="white" id='22'></button>
          <button onClick={this.handleKeyToggle()} className="black" id='23'></button>
          <button onClick={this.handleKeyToggle()} className="white" id='24'></button>
          <button onClick={this.handleKeyToggle()} className="black" id='25'></button>
          <button onClick={this.handleKeyToggle()} className="white" id='26'></button>
          <button onClick={this.handleKeyToggle()} className="white" id='27'></button>
          <button onClick={this.handleKeyToggle()} className="black" id='28'></button>
          <button onClick={this.handleKeyToggle()} className="white" id='29'></button>
          <button onClick={this.handleKeyToggle()} className="black" id='30'></button>
          <button onClick={this.handleKeyToggle()} className="white" id='31'></button>
          <button onClick={this.handleKeyToggle()} className="white" id='32'></button>
          <button onClick={this.handleKeyToggle()} className="black" id='33'></button>
          <button onClick={this.handleKeyToggle()} className="white" id='34'></button>
          <button onClick={this.handleKeyToggle()} className="black" id='35'></button>
          <button onClick={this.handleKeyToggle()} className="white" id='36'></button>
          <button onClick={this.handleKeyToggle()} className="black" id='37'></button>
          <button onClick={this.handleKeyToggle()} className="white" id='38'></button>
          <button onClick={this.handleKeyToggle()} className="white" id='39'></button>
          <button onClick={this.handleKeyToggle()} className="black" id='40'></button>
          <button onClick={this.handleKeyToggle()} className="white" id='41'></button>
          <button onClick={this.handleKeyToggle()} className="black" id='42'></button>
          <button onClick={this.handleKeyToggle()} className="white" id='43'></button>
          <button onClick={this.handleKeyToggle()} className="white" id='44'></button>
          <button onClick={this.handleKeyToggle()} className="black" id='45'></button>
          <button onClick={this.handleKeyToggle()} className="white" id='46'></button>
          <button onClick={this.handleKeyToggle()} className="black" id='47'></button>
          <button onClick={this.handleKeyToggle()} className="white" id='48'></button>
          <button onClick={this.handleKeyToggle()} className="black" id='49'></button>
          <button onClick={this.handleKeyToggle()} className="white" id='50'></button>
          <button onClick={this.handleKeyToggle()} className="white" id='51'></button>
          <button onClick={this.handleKeyToggle()} className="black" id='52'></button>
          <button onClick={this.handleKeyToggle()} className="white" id='53'></button>
          <button onClick={this.handleKeyToggle()} className="black" id='54'></button>
          <button onClick={this.handleKeyToggle()} className="white" id='55'></button>
          <button onClick={this.handleKeyToggle()} className="white" id='56'></button>
          <button onClick={this.handleKeyToggle()} className="black" id='57'></button>
          <button onClick={this.handleKeyToggle()} className="white" id='58'></button>
          <button onClick={this.handleKeyToggle()} className="black" id='59'></button>
          <button onClick={this.handleKeyToggle()} className="white" id='60'></button>
          <button onClick={this.handleKeyToggle()} className="black" id='61'></button>
          <button onClick={this.handleKeyToggle()} className="white" id='62'></button>
          <button onClick={this.handleKeyToggle()} className="white" id='63'></button>
          <button onClick={this.handleKeyToggle()} className="black" id='64'></button>
          <button onClick={this.handleKeyToggle()} className="white" id='65'></button>
          <button onClick={this.handleKeyToggle()} className="black" id='66'></button>
          <button onClick={this.handleKeyToggle()} className="white" id='67'></button>
          <button onClick={this.handleKeyToggle()} className="white" id='68'></button>
          <button onClick={this.handleKeyToggle()} className="black" id='69'></button>
          <button onClick={this.handleKeyToggle()} className="white" id='70'></button>
          <button onClick={this.handleKeyToggle()} className="black" id='71'></button>
          <button onClick={this.handleKeyToggle()} className="white" id='72'></button>
          <button onClick={this.handleKeyToggle()} className="black" id='73'></button>
          <button onClick={this.handleKeyToggle()} className="white" id='74'></button>
          <button onClick={this.handleKeyToggle()} className="white" id='75'></button>
          <button onClick={this.handleKeyToggle()} className="black" id='76'></button>
          <button onClick={this.handleKeyToggle()} className="white" id='77'></button>
          <button onClick={this.handleKeyToggle()} className="black" id='78'></button>
          <button onClick={this.handleKeyToggle()} className="white" id='79'></button>
          <button onClick={this.handleKeyToggle()} className="white" id='80'></button>
          <button onClick={this.handleKeyToggle()} className="black" id='81'></button>
          <button onClick={this.handleKeyToggle()} className="white" id='82'></button>
          <button onClick={this.handleKeyToggle()} className="black" id='83'></button>
          <button onClick={this.handleKeyToggle()} className="white" id='84'></button>
          <button onClick={this.handleKeyToggle()} className="black" id='85'></button>
          <button onClick={this.handleKeyToggle()} className="white" id='86'></button>
          <button onClick={this.handleKeyToggle()} className="white" id='87'></button>
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
