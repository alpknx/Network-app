import cl from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

	let postsData = [
		{id: 1, message: 'Hi, How are you?', likes: 20},
		{id: 2, message: 'It is my first Post', likes: 11},
		{id: 3, message: 'Second', likes: 10},
	];

	return (
		<div className={cl.posts_list}>
			<h1> My Posts </h1>
			<Post message={postsData[0].message} likes={postsData[0].likes}/>
			<Post message={postsData[1].message} likes={postsData[1].likes}/>
			<Post message={postsData[2].message} likes={postsData[2].likes}/>
			</div>
	);
}

export default MyPosts;
