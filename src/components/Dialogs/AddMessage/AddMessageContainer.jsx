import { connect } from 'react-redux';
import { onAddMessageActionCreator, updateNewMessageTextActionCreator } from '../../../Redux/messages-reducer';
import AddMessage from './AddMessage';

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

const AddMessageContainer = connect (null, mapDispatchToProps) (AddMessage);

export default AddMessageContainer;
