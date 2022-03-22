import cl from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

	let postElements = props.postsData.map(postItem => <Post message={postItem.message} likes={postItem.likes}/>);

	return (
		<div className={cl.posts_list}>
			<h1> My Posts </h1>
			{postElements}
			</div>
	);
}

export default MyPosts;
