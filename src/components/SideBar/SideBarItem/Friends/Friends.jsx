import React from 'react';
import cl from './Friends.module.css';

const Friends = (props) => {
	return(
		<li className={cl.friends}>
			<div className={cl.friends_info}>
				<div><img src={props.img}/> </div>
				<div>{props.name}</div>
			</div>
		</li>
	);
}

export default Friends;
