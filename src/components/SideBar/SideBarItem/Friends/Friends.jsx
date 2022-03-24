import profileImg from '../../../assets/img/profile-img.png'
import React from 'react';
import { NavLink } from 'react-router-dom';
import cl from './Friends.module.css';

const Friends = (props) => {
	return(
		<li className={cl.friends}>
			{props.friends.map(friend =>
			<div className={cl.friends_info} key={friend.id}>
			<NavLink to={'/profile/' + `${friend.id}`}>
				<div><img src={friend.photos.small ? friend.photos.small : profileImg}/></div>
			</NavLink>
				<div>{friend.name}</div>
			</div>
			)}
		</li>
	);
}

export default Friends;
