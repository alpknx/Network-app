import profileImg from './../../assets/img/profile-img.png';
import cl from './User.module.css';

const User = (props) => {
	return(
		<div className={cl.user_profile}>
			<div className={cl.image_and_button}>
				<div className={cl.img_profile}>
					<img src={profileImg}/>
				</div>
				<div className={cl.button}>
					<button>Follow</button>
				</div>
			</div>
			<div className={cl.user_info}>
				<div className={cl.user_name}>
					{props.name}
				</div>
				<div className={cl.user_location}>
					{props.location}
				</div>
			</div>
		</div>
	);
}

export default User;
