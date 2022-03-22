import React from 'react';
import cl from './AddMessage.module.css'

const AddMessage = (props) => {

	let newMessageElement = React.createRef();

	let onAddMessage = () => {
		props.dispatch({type: 'ADD-MESSAGE'})
	}

	let onMessageChange =() =>  {
		let text = newMessageElement.current.value;
		let action = {type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text};
		props.dispatch(action);
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