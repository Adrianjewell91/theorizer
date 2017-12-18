import {RECEIVE_PREDICTION} from '../actions/prediction_actions';

export const predictionReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_PREDICTION:
      return action.prediction;
    default:
      return state;
  }
};
