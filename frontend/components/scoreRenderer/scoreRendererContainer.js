import { connect } from 'react-redux';
import ScoreRenderer from './scoreRenderer';
import { requestMajorChordName } from '../../actions/prediction_actions';

const mapStateToProps = (state) => ({
    prediction: state.entities.prediction,
    userInputData: state.entities.userInputData
});

const mapDispatchToProps = (dispatch) => ({
    requestMajorChordName: (prediction) => dispatch(requestMajorChordName(prediction))
});

export default connect(mapStateToProps, mapDispatchToProps)(ScoreRenderer);
