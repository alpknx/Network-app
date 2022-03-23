import cl from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import AddPostContainer from './AddPost/AddPostContainer';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
	return (
		<div className={cl.app_content_inner}>
			<div className={cl.profile_content}>
				<ProfileInfo/>
				<AddPostContainer />
				<MyPostsContainer />
			</div>
		</div>
	);
}

export default Profile;
