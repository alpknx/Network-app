import React, { createRef } from 'react';
import cl from './AddPost.module.css';

const AddPost = () => {

	let newPostElement = React.createRef();

	let onAddPost = () => {
		let text = newPostElement.current.value;
	}

	return (
		<div className={cl.add_post}>
			<div className={cl.post_textarea}>
				<textarea ref={newPostElement}></textarea>
			</div>
			<div className={cl.add_post_button}>
				<button onClick={ onAddPost }>Add Post</button>
			</div>
		</div>
	);
}

export default AddPost;
