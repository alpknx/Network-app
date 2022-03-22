import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
	let state = props.reduxStore. getState().messagesPage;
		
	return (
		<Dialogs messagesPage={state} reduxStore={props.reduxStore}/>
	);
}

export default DialogsContainer;
