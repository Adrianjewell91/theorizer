import { combineReducers } from 'redux';
import {predictionReducer} from './prediction_reducer';
import {userInputDataReducer} from './user_input_reducer';

export default combineReducers({
    prediction: predictionReducer,
    userInputData: userInputDataReducer
});
