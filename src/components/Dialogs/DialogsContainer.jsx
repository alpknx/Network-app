import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import Dialogs from './Dialogs';

let mapStateToProps =(state) => {
	return {
		messagesPage: state.messagesPage,
		
	}
}

export default compose(connect(mapStateToProps, null), withAuthRedirect)(Dialogs); 
