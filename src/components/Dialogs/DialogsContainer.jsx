import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import Dialogs from './Dialogs';

let mapStateToProps =(state) => {
	return {
		messagesPage: state.messagesPage,
		
	}
}

export default connect(mapStateToProps, null)(Dialogs); 
