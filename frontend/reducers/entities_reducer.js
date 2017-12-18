import { combineReducers } from 'redux';
import {predictionReducer} from './prediction_reducer';

export default combineReducers({
    prediction: predictionReducer
});

// export default EntitiesReducer;
