import React from 'react';
import { onAddMessageActionCreator, updateNewMessageTextActionCreator } from '../../../Redux/messages-reducer';
import AddMessage from './AddMessage';

const AddMessageContainer = (props) => {

	let onAddMessage = () => {
		props.reduxStore.dispatch(onAddMessageActionCreator());
	}

	let onMessageChange =(text) =>  {
		props.reduxStore.dispatch(updateNewMessageTextActionCreator(text));
	}
	
	return(
		<AddMessage updateNewMessageText={onMessageChange} sendMessage={onAddMessage}
		/>
	);

}

export default AddMessageContainer;
