import MyPosts from './MyPosts/MyPosts';
import cl from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
	return (
		<div className={cl.app_content_inner}>
			<div className={cl.profile_content}>
				<ProfileInfo/>
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
