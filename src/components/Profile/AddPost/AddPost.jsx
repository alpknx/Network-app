import React from 'react';
import { onAddPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/state';
import cl from './AddPost.module.css';

const AddPost = (props) => {

	let newPostElement = React.createRef();

	let onAddPost = () => {
		props.dispatch(onAddPostActionCreator())
	}

	let onPostChange =() =>  {
		let text = newPostElement.current.value;
		props.dispatch(updateNewPostTextActionCreator(text));
	}

	return (
		<div className={cl.add_post}>
			<div className={cl.post_textarea}>
				<textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
			</div>
			<div className={cl.add_post_button}>
				<button onClick={ onAddPost }>Add Post</button>
			</div>
		</div>
	);
}

export default AddPost;
