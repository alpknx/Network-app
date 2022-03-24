import { connect } from 'react-redux';
import Dialogs from './Dialogs';

let mapStateToProps =(state) => {
	return {
		messagesPage: state.messagesPage
	}
}

const DialogsContainer = connect (mapStateToProps, null) (Dialogs);

export default DialogsContainer;
