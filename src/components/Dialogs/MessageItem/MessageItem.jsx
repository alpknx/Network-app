import cl from './MessageItem.module.css'
import profileIcon from './../../assets/img/sidebar/profile-icon.png';

const MessageItem = (props) => {
	return(
		<li className={cl.message_item}>
			<div className={cl.left_menu_icon}>
				<img src={profileIcon}/>
			</div>
			{props.message}
		</li>
	);
}

export default MessageItem;
