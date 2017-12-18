import { connect } from 'react-redux';
import Keyboard from './keyboard';
import { receiveUserInputData } from '../../actions/prediction_actions';

const mapStateToProps = (state) => ({
    userInputData: state.entities.userInputData
});

const mapDispatchToProps = (dispatch) => ({
    receiveUserInputData: (input) => dispatch(receiveUserInputData(input))
});

export default connect(mapStateToProps, mapDispatchToProps)(Keyboard);
