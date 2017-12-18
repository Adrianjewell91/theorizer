import $ from 'jquery';

//
export const RECEIVE_PREDICTION = "RECEIVE_PREDICTION";
export const RECEIVE_INPUT = "RECEIVE_INPUT";

//action-creators
export const receiveMajorChordName = (prediction) => (
  {type: RECEIVE_PREDICTION, prediction: prediction}
);

export const receiveUserInputData = (input) => (
  {type: RECEIVE_INPUT, input: input}
)

//util
export const getMajorChordName = (data) => {
  return $.ajax({method: "get",
                 url: `/api/neural_net/?input=${data}`,
  });
}

//thunks
export const requestMajorChordName = (input) => (dispatch) => {
  return getMajorChordName(input).then((res) => dispatch(receiveMajorChordName(res)));
}
