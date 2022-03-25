import profileImg from './../../assets/img/profile-img.png'
import cl from './ProfileInfo.module.css';
import Preloader from '../../Preloader/Preloader';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
	if (!props.profile) {
		return <Preloader/>
	}
	return (
		<div className={cl.user_info}>
			<div className={cl.img_profile}>
				<img src={props.profile.photos.large ? props.profile.photos.small : profileImg}/>
			</div>
			<div className={cl.user_name}>
				{props.profile.fullName}
				<ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
				<div>
					Lokking For a Job: {props.profile.lookingForAJob}
				</div>
				
			</div>
			<div className={cl.user_location}>
				Moscow
			</div>
		</div>
	);
}

export default ProfileInfo;
