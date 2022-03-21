import cl from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
	return (
		<div className={cl.posts_list}>
			<h1> My Posts </h1>
			<Post message='Hi, How are you?' likes='10'/>
			<Post message='It is my first Post' likes='20'/>
			</div>
	);
}

export default MyPosts;
