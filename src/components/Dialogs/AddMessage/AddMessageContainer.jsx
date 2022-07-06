import { connect } from 'react-redux';
import { compose } from 'redux';
import { sendMessageCreator } from '../../../Redux/messages.reducer';
import AddMessage from './AddMessage';

const mapStateToProps = (state) => ({
  messagesPage: state.messagesPage,
});

const mapDispatchToProps = (dispatch) => ({
  sendMessage: (newMessageBody) => {
    dispatch(sendMessageCreator(newMessageBody));
  },
});

export default compose(connect(mapStateToProps, mapDispatchToProps))(AddMessage);
