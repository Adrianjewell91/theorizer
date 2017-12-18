import {RECEIVE_INPUT} from '../actions/prediction_actions';

function emptyInput() {
  let data = [];
  for (let i = 0; i < 88; i++) {
    data.push(0);
  }
  return data;
}

export const userInputDataReducer = (state = emptyInput(), action) => {
  switch (action.type) {
    case RECEIVE_INPUT:
      return action.input;
    default:
      return state;
  }
};
