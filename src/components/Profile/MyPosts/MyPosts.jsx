import cl from './MyPosts.module.css';
import profileImg from './../../assets/img/profile-img.png'
import Post from './Post/Post';

const MyPosts = () => {
	return (
		<div className={cl.posts_list}>
			<h1> My Posts </h1>
			<Post/>
			</div>
	);
}

export default MyPosts;
