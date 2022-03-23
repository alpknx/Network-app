import React from 'react';
import { onAddPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/profile-reducer';
import StoreContext from '../../../StoreContext';
import AddPost from './AddPost';

const AddPostContainer = (props) => {
	return (
		<StoreContext.Consumer>
			{(reduxStore) => {
				let state = reduxStore.getState();

				let onAddPost = () => {
					reduxStore.dispatch(onAddPostActionCreator())
				}

				let onPostChange =(text) =>  {
					let action = updateNewPostTextActionCreator(text);
					reduxStore.dispatch(action);
				}

			return(
				<AddPost updateNewPostText={onPostChange}
					onAddPost={onAddPost} 
					newPostText={state.profilePage.newPostText}/>)
			}
		}
		</StoreContext.Consumer>
		
	);
}

export default AddPostContainer;
