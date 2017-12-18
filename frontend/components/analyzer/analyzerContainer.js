import { connect } from 'react-redux';
import Analyzer from './analyzer';
import { requestMajorChordName } from '../../actions/prediction_actions';

const mapStateToProps = (state) => ({
    prediction: state.entities.prediction,
    userInputData: state.entities.userInputData
});

const mapDispatchToProps = (dispatch) => ({
    requestMajorChordName: (prediction) => dispatch(requestMajorChordName(prediction))
});

export default connect(mapStateToProps, mapDispatchToProps)(Analyzer);
