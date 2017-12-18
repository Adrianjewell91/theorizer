import { connect } from 'react-redux';
import Analyzer from './analyzer';
import { receiveMajorChordName } from '../../actions/prediction_actions';

const mapStateToProps = (state) => ({
    prediction: state.entities.prediction,
    userInputData: state.entities.userInputData
});

const mapDispatchToProps = (dispatch) => ({
    receiveMajorChordName: (prediction) => dispatch(receiveMajorChordName(prediction))
});

export default connect(mapStateToProps, mapDispatchToProps)(Analyzer);
