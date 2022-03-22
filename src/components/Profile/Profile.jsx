import MyPosts from './MyPosts/MyPosts';
import cl from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import AddPost from './AddPost/AddPost';

const Profile = (props) => {
	return (
		<div className={cl.app_content_inner}>
			<div className={cl.profile_content}>
				<ProfileInfo/>
				<AddPost dispatch={props.dispatch} 
							newPostText={props.profilePage.newPostText}/>
				<MyPosts postsData={props.profilePage.postsData}/>
			</div>
		</div>
	);
}

export default Profile;
