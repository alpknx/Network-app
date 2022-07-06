import { connect } from 'react-redux';
import { compose } from 'redux';
import { sendMessageCreator } from '../../../Redux/messages-reducer';
import AddMessage from './AddMessage';

let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMessageBody) => {
      dispatch(sendMessageCreator(newMessageBody));
    },
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(AddMessage);
