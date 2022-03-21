import profileIcon from './../assets/img/sidebar/profile-icon.png';
import messagesIcon from './../assets/img/sidebar/messages-icon.png';
import usersIcon from './../assets/img/sidebar/users-icon.png';
import newsIcon from './../assets/img/sidebar/news-icon.png';
import musicIcon from './../assets/img/sidebar/music-icon.png';
import settingsIcon from './../assets/img/sidebar/settings-icon.png';
import cl from './SideBar.module.css';

const SideBar = (props) => {
	return (
		<div className={cl.side_bar_inner}>
			<nav className={cl.side_bar_nav}>
				<ol className={cl.side_bar_ol}>
					<li className={cl.side_bar_item}>
						<div className={cl.left_menu_icon}>
							<img src={profileIcon}/>
						</div>
						<a href="/profile"><span className={cl.left_label}>Profile</span></a>
					</li>
					<li className={cl.side_bar_item}>
						<div className={cl.left_menu_icon}>
							<img src={messagesIcon}/>
						</div>
						<a href="/dialogs"><span className={cl.left_label}>Messages</span></a>
					</li>
					<li className={cl.side_bar_item}>
						<div className={cl.left_menu_icon}>
							<img src={usersIcon}/>
						</div>
						<a href="/users"><span className={cl.left_label}>Users</span></a>
					</li>
					<li className={cl.side_bar_item}>
						<div className={cl.left_menu_icon}>
							<img src={newsIcon}/>
						</div>
						<a href="/news"><span className={cl.left_label}>News</span></a>
					</li>
					<li className={cl.side_bar_item}>
						<div className={cl.left_menu_icon}>
							<img src={musicIcon}/>
						</div>
						<a href="/music"><span className={cl.left_label}>Music</span></a>
					</li>
					<li className={cl.side_bar_item}>
						<div className={cl.left_menu_icon}>
							<img src={settingsIcon}/>
						</div>
						<a href="/settings"><span className={cl.left_label}>Settings</span></a>
					</li>
				</ol>
			</nav>
		</div>
	)
}

export default SideBar;