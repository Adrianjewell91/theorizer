import $ from 'jquery';

const data = [[0,1,0,0,0,  1,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 0,  0,  0,  0,  0,  1,  0,  0,  1,  0,  0,  0,  0,  1,  0,  0,]];

//
export const RECEIVE_PREDICTION = "RECEIVE_PREDICTION";

//action-creators
export const receiveMajorChordName = (prediction) => (
  {type: RECEIVE_PREDICTION, prediction: prediction}
);

//util
export const getMajorChordName = (data) => {
  return $.ajax({method: "get",
                 url: `/api/neural_net/?input=${data}`,
  });
}

//thunks
export const requestMajorChordName = (input) => (dispatch) => {
  return getChordName(input).then((res) => dispatch(receiveChordName(res)));
}
