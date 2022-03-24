import { connect } from 'react-redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import Dialogs from './Dialogs';

let mapStateToProps =(state) => {
	return {
		messagesPage: state.messagesPage,
		
	}
}

let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect (mapStateToProps, null) (AuthRedirectComponent);

export default DialogsContainer;
