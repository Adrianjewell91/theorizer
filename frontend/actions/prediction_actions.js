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
export const getMajorChordName = (data, callback) => {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', `/api/neural_net/?input=${data}`);
  xhr.onload = function() {
      if (xhr.status === 200) {
          callback(JSON.parse(xhr.responseText));
      }
      else {
          console.log(xhr.status);
      }
  };
  xhr.send();

  // return $.ajax({method: "get",
  //                url: `/api/neural_net/?input=${data}`,
  // });
}

//thunks
export const requestMajorChordName = (input) => (dispatch) => {
  return getMajorChordName(input, (res) => dispatch(receiveMajorChordName(res)));
}
