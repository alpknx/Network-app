import cl from './AddPost.module.css';

const AddPost = () => {
	return (
		<div className={cl.add_post}>
			<div className={cl.post_textarea}>
				<textarea>My New Post</textarea>
			</div>
			<div className={cl.add_post_button}>
				<button>Add Post</button>
			</div>
		</div>
	);
}

export default AddPost;
