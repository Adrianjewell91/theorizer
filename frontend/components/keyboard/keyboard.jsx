import React from 'react';

class Keyboard extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    console.log("at handlesubmit");
    const data = [[0, 1, 0, 0, 0,  1,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0,  0,  0,  0,  0,  1,  0,  0,  1,  0,  0,  0,  0,  1,  0,  0,]];
    this.props.requestMajorChordName(data);
  }

  render () {
    return (
      <div>
        Keys go here.
        <button type="button" onClick={this.handleSubmit}>Submit a query to neural network</button>

        <div className="keyboard-register">
          <button className="white-key" id='0'>a</button>
          <button className="black-key" id='1'></button>
          <button className="white-key" id='2'>b</button>
          <button className="white-key" id='3'>c</button>
          <button className="black-key" id='4'></button>
          <button className="white-key" id='5'></button>
          <button className="black-key" id='6'></button>
          <button className="white-key" id='7'></button>
          <button className="white-key" id='8'></button>
          <button className="black-key" id='9'></button>
          <button className="white-key" id='10'></button>
          <button className="black-key" id='11'></button>
          <button className="white-key" id='12'></button>
          <button className="black-key" id='13'></button>
          <button className="white-key" id='14'></button>
          <button className="white-key" id='15'>c</button>
          <button className="black-key" id='16'></button>
          <button className="white-key" id='17'></button>
          <button className="black-key" id='18'></button>
          <button className="white-key" id='19'></button>
          <button className="white-key" id='20'></button>
          <button className="black-key" id='21'></button>
          <button className="white-key" id='22'></button>
          <button className="black-key" id='23'></button>
          <button className="white-key" id='24'></button>
          <button className="black-key" id='25'></button>
          <button className="white-key" id='26'></button>
          <button className="white-key" id='27'>c</button>
          <button className="black-key" id='28'></button>
          <button className="white-key" id='29'></button>
          <button className="black-key" id='30'></button>
          <button className="white-key" id='31'></button>
          <button className="white-key" id='32'></button>
          <button className="black-key" id='33'></button>
          <button className="white-key" id='34'></button>
          <button className="black-key" id='35'></button>
          <button className="white-key" id='36'></button>
          <button className="black-key" id='37'></button>
          <button className="white-key" id='38'></button>
          <button className="white-key" id='39'>c</button>
          <button className="black-key" id='40'></button>
          <button className="white-key" id='41'></button>
          <button className="black-key" id='42'></button>
          <button className="white-key" id='43'></button>
          <button className="white-key" id='44'></button>
          <button className="black-key" id='45'></button>
          <button className="white-key" id='46'></button>
          <button className="black-key" id='47'></button>
          <button className="white-key" id='48'></button>
          <button className="black-key" id='49'></button>
          <button className="white-key" id='50'></button>
          <button className="white-key" id='51'>c</button>
          <button className="black-key" id='52'></button>
          <button className="white-key" id='53'></button>
          <button className="black-key" id='54'></button>
          <button className="white-key" id='55'></button>
          <button className="white-key" id='56'></button>
          <button className="black-key" id='57'></button>
          <button className="white-key" id='58'></button>
          <button className="black-key" id='59'></button>
          <button className="white-key" id='60'></button>
          <button className="black-key" id='61'></button>
          <button className="white-key" id='62'></button>
          <button className="white-key" id='63'>c</button>
          <button className="black-key" id='64'></button>
          <button className="white-key" id='65'></button>
          <button className="black-key" id='66'></button>
          <button className="white-key" id='67'></button>
          <button className="white-key" id='68'></button>
          <button className="black-key" id='69'></button>
          <button className="white-key" id='70'></button>
          <button className="black-key" id='71'></button>
          <button className="white-key" id='72'></button>
          <button className="black-key" id='73'></button>
          <button className="white-key" id='74'></button>
          <button className="white-key" id='75'>c</button>
          <button className="black-key" id='76'></button>
          <button className="white-key" id='77'></button>
          <button className="black-key" id='78'></button>
          <button className="white-key" id='79'></button>
          <button className="white-key" id='80'></button>
          <button className="black-key" id='81'></button>
          <button className="white-key" id='82'></button>
          <button className="black-key" id='83'></button>
          <button className="white-key" id='84'></button>
          <button className="black-key" id='85'></button>
          <button className="white-key" id='86'></button>
          <button className="white-key" id='87'>c</button>
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
