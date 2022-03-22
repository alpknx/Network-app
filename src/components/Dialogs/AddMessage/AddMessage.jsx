import React from 'react';
import { onAddMessageActionCreator, updateNewMessageTextActionCreator } from '../../../Redux/messages-reducer';

import cl from './AddMessage.module.css'

const AddMessage = (props) => {

	let newMessageElement = React.createRef();

	let onAddMessage = () => {
		props.dispatch((onAddMessageActionCreator()));
	}

	let onMessageChange =() =>  {
		let text = newMessageElement.current.value;
		props.dispatch(updateNewMessageTextActionCreator(text));
	}
	
	return(
		<div className={cl.add_message}>
			<div className={cl.message_textarea}>
				<textarea onChange={onMessageChange} ref={newMessageElement}></textarea>
			</div>
			<div className={cl.add_message_button}>
				<button onClick={ onAddMessage }>Add Message</button>
			</div>
		</div>
	);

}

export default AddMessage;