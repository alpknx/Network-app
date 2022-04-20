import cl from './User.module.css';

const User = (props) => {
	const user = props.user

	return(
		<div className={cl.user_wrapper_inner}>
			
			<div className={cl.user_profile} key={user.id}>
				<div className={cl.image_and_button}>
					<div className={cl.img_profile}>
						<img src={user.img}/>
					</div>
					<div className={cl.button}>
						{user.followed
							? <button onClick={() => {
								props.unfollow(user.id);
							} }>Unfollow</button>
							: <button onClick={() => {
								props.follow(user.id);
							} }>Follow</button>}
					</div>
				</div>
				<div className={cl.user_info}>
					<div className={cl.user_name}>
						<div>
							{user.fullName}
						</div>
						<div>
							{user.status}
						</div>
					</div>
					<div className={cl.user_location}>
						<div>
							{user.location.country}
						</div>
						<div>
							{user.location.city}
						</div>
					</div>
				</div>
			</div>
	</div>
	);
}

export default User;
