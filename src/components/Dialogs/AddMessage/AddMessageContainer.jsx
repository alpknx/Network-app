import React from 'react';
import { onAddMessageActionCreator, updateNewMessageTextActionCreator } from '../../../Redux/messages-reducer';
import StoreContext from '../../../StoreContext';
import AddMessage from './AddMessage';

const AddMessageContainer = (props) => {
	return(
		<StoreContext.Consumer>
			{(reduxStore) => {
				let onAddMessage = () => {
				reduxStore.dispatch(onAddMessageActionCreator());
				}

				let onMessageChange =(text) =>  {
				reduxStore.dispatch(updateNewMessageTextActionCreator(text));
				}

				return(
					<AddMessage updateNewMessageText={onMessageChange} sendMessage={onAddMessage}/>
				);
			}
		}
		</StoreContext.Consumer>
	);

}

export default AddMessageContainer;
