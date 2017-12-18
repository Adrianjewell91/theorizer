import { connect } from 'react-redux';
import Keyboard from './keyboard';
import { requestMajorChordName } from '../../actions/prediction_actions';

const mapStateToProps = (state) => ({
    prediction: state.prediction
});

const mapDispatchToProps = (dispatch) => ({
    requestMajorChordName: (prediction) => dispatch(requestMajorChordName(prediction))
});

export default connect(mapStateToProps, mapDispatchToProps)(Keyboard);
