import profileImg from './../assets/img/profile-img.png'
import MyPosts from './MyPosts/MyPosts';
import cl from './Profile.module.css';

const Profile = () => {
	return (
		<div className={cl.app_content_inner}>
			<div className={cl.profile_content}>
				<div className={cl.user_info}>
					<div className={cl.img_profile}>
						<img src={profileImg}/>
					</div>
					<div className={cl.user_name}>
						Alexander
					</div>
					<div className={cl.user_location}>
						Moscow
					</div>
				</div>
				<div className={cl.add_post}>
					<div className={cl.post_textarea}>
						<textarea>My New Post</textarea>
					</div>
					<div className={cl.add_post_button}>
						<button>Add Post</button>
					</div>
				</div>
				<MyPosts/>
			</div>
		</div>
	);
}

export default Profile;
