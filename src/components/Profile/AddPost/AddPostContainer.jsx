import React from 'react';
import { onAddPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/profile-reducer';
import AddPost from './AddPost';

const AddPostContainer = (props) => {

	let state = props.reduxStore.getState();

	let onAddPost = () => {
		props.reduxStore.dispatch(onAddPostActionCreator())
	}

	let onPostChange =(text) =>  {
		let action = updateNewPostTextActionCreator(text);
		props.reduxStore.dispatch(action);
	}

	return (
		<AddPost updateNewPostText={onPostChange}
					onAddPost={onAddPost} newPostText={state.profilePage.newPostText}/>
	);
}

export default AddPostContainer;
