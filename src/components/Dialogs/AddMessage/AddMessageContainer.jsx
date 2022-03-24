import { connect } from 'react-redux';
import { onAddMessageActionCreator, updateNewMessageTextActionCreator } from '../../../Redux/messages-reducer';
import AddMessage from './AddMessage';

let mapStateToProps =(state) => {
	return {
		newMessageText: state.messagesPage.newMessageText
	}
}

let mapDispatchToProps =(dispatch) => {
	return {
		updateNewMessageText: (text) => {
			dispatch(updateNewMessageTextActionCreator(text));
		},
		sendMessage: () => {
			dispatch(onAddMessageActionCreator());
		}
	}
}

const AddMessageContainer = connect(mapStateToProps, mapDispatchToProps) (AddMessage);

export default AddMessageContainer;
