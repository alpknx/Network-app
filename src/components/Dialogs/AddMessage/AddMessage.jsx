import React from 'react';
import cl from './AddMessage.module.css'

const AddMessage = (props) => {

	let newMessageElement = React.createRef();

	let onAddMessage = () => {
		props.onAddMessage();
	}

	let onMessageChange =() =>  {
		let text = newMessageElement.current.value;
		props.updateNewMessageText(text);
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