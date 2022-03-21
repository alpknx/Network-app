import profileIcon from './../assets/img/sidebar/profile-icon.png';
import messagesIcon from './../assets/img/sidebar/messages-icon.png';
import usersIcon from './../assets/img/sidebar/users-icon.png';
import newsIcon from './../assets/img/sidebar/news-icon.png';
import musicIcon from './../assets/img/sidebar/music-icon.png';
import settingsIcon from './../assets/img/sidebar/settings-icon.png';
import cl from './SideBar.module.css';

const SideBar = () => {
	return (
		<div className={cl.side_bar_inner}>
			<nav className={cl.side_bar_nav}>
				<ol className={cl.side_bar_ol}>
					<li className={cl.side_bar_item}>
						<li className={cl.left_menu_icon}>
							<img src={profileIcon}/>
						</li>
						<span className={cl.left_label}>Profile</span>
					</li>
					<li className={cl.side_bar_item}>
						<div className={cl.left_menu_icon}>
							<img src={messagesIcon}/>
						</div>
						<span className={cl.left_label}>Messages</span>
					</li>
					<li className={cl.side_bar_item}>
						<div className={cl.left_menu_icon}>
							<img src={usersIcon}/>
						</div>
						<span className={cl.left_label}>Users</span>
					</li>
					<li className={cl.side_bar_item}>
						<div className={cl.left_menu_icon}>
							<img src={newsIcon}/>
						</div>
						<span className={cl.left_label}>News</span>
					</li>
					<li className={cl.side_bar_item}>
						<div className={cl.left_menu_icon}>
							<img src={musicIcon}/>
						</div>
						<span className={cl.left_label}>Music</span>
					</li>
					<li className={cl.side_bar_item}>
						<div className={cl.left_menu_icon}>
							<img src={settingsIcon}/>
						</div>
						<span className={cl.left_label}>Settings</span>
					</li>
				</ol>
			</nav>
		</div>
	)
}

export default SideBar;