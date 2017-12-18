import {RECEIVE_PREDICTION} from '../actions/prediction_actions';

const keys = {0:'C',1:'Db',2:'D',3:'Eb',4:'E',
              5:'F', 6:'F#', 7:'G',8:'Ab',9:'A',
              10:'Bb',11:'B'};

export const predictionReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_PREDICTION:
      // debugger
      let parsed = JSON.parse(action.prediction);
      return {response: keys[parsed.response]}

    default:
      return state;
  }
};
