import { connect } from 'react-redux';
import Dialogs from './Dialogs';

let mapStateToProps =(state) => {
	return {
		messagesPage: state.messagesPage,
		isAuth: state.auth.isAuth
	}
}

const DialogsContainer = connect (mapStateToProps, null) (Dialogs);

export default DialogsContainer;
