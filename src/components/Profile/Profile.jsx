import profileImg from './../assets/img/profile-img.png'
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
				<div className={cl.posts_list}>
					<div className={cl.post_item}>
						<div className={cl.post_text}>
							new post
						</div>
						<div className={cl.post_likes}>
							likes : 10 
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Profile;
