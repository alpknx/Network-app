import profileImg from './../../assets/img/profile-img.png'
import cl from './ProfileInfo.module.css';
import Preloader from '../../Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto }) => {
	if (!profile) {
		return <Preloader/>
	}

	const onMainPhotoSelected = (e) => {
			if (e.target.files.length) {
				savePhoto(e.target.files[0]);
		}
	}

	return (
		<div className={cl.user_info}>
			<div className={cl.img_profile}>
				<img src={profile.photos.large ? profile.photos.small : profileImg}/>
				{ isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
			</div>
			<div className={cl.user_name}>
				{profile.fullName}
				<ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
				<div>
					Lokking For a Job: {profile.lookingForAJob}
				</div>
				
			</div>
			<div className={cl.user_location}>
				Moscow
			</div>
		</div>
	);
}

export default ProfileInfo;
