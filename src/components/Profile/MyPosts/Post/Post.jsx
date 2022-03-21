import cl from './Post.module.css';
import profileImg from './../../../assets/img/profile-img.png'

const Post = (props) => {
	return (
		<div className={cl.post_item}>
			<div className={cl.img_profile}>
					<img src={profileImg}/>
				</div>
			<div className={cl.post_and_like}>
				<div className={cl.post_text}>
					{props.message}
				</div>
				<div className={cl.post_likes}>
					Likes: {props.likes}
				</div>
			</div>
		</div>
	);
}

export default Post;
