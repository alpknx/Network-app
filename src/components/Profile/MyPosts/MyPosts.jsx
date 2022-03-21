import cl from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

	let postsData = [
		{id: 1, message: 'Hi, How are you?', likes: 20},
		{id: 2, message: 'It is my first Post', likes: 11},
		{id: 3, message: 'Second', likes: 10},
	];

	let postElements = postsData.map(postItem => <Post message={postItem.message} likes={postItem.likes}/>);

	return (
		<div className={cl.posts_list}>
			<h1> My Posts </h1>
			{postElements}
			</div>
	);
}

export default MyPosts;
