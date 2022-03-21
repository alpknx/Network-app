import profileImg from './../../assets/img/profile-img.png'
import cl from './ProfileInfo.module.css';

const ProfileInfo = () => {
	return (
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
	);
}

export default ProfileInfo;
