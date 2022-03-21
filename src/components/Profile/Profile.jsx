import MyPosts from './MyPosts/MyPosts';
import cl from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import AddPost from './AddPost/AddPost';

const Profile = () => {
	return (
		<div className={cl.app_content_inner}>
			<div className={cl.profile_content}>
				<ProfileInfo/>
				<AddPost />
				<MyPosts/>
			</div>
		</div>
	);
}

export default Profile;
