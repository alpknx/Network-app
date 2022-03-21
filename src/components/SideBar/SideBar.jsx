import profileIcon from './../assets/img/sidebar/profile-icon.png';
import messagesIcon from './../assets/img/sidebar/messages-icon.png';
import usersIcon from './../assets/img/sidebar/users-icon.png';
import newsIcon from './../assets/img/sidebar/news-icon.png';
import musicIcon from './../assets/img/sidebar/music-icon.png';
import settingsIcon from './../assets/img/sidebar/settings-icon.png';
import cl from './SideBar.module.css';
import { NavLink } from 'react-router-dom';

const SideBar = (props) => {
	return (
		<div className={cl.side_bar_inner}>
			<nav className={cl.side_bar_nav}>
				<ol className={cl.side_bar_ol}>
					<li className={cl.side_bar_item}>
						<div className={cl.left_menu_icon}>
							<img src={profileIcon}/>
						</div>
						<NavLink to="/profile" 
									className={({ isActive }) => isActive ? `${cl.activeLink}` : `${cl.left_label}`}>Profile
						</NavLink>
					</li>
					<li className={cl.side_bar_item}>
						<div className={cl.left_menu_icon}>
							<img src={messagesIcon}/>
						</div>
						<NavLink to="/dialogs"
									className={({ isActive }) => isActive ? `${cl.activeLink}` : `${cl.left_label}`}>Messages
						</NavLink>
					</li>
					<li className={cl.side_bar_item}>
						<div className={cl.left_menu_icon}>
							<img src={usersIcon}/>
						</div>
						<NavLink to="/users"
									className={({ isActive }) => isActive ? `${cl.activeLink}` : `${cl.left_label}`}>Users
						</NavLink>
					</li>
					<li className={cl.side_bar_item}>
						<div className={cl.left_menu_icon}>
							<img src={newsIcon}/>
						</div>
						<NavLink to="/news"
									className={({ isActive }) => isActive ? `${cl.activeLink}` : `${cl.left_label}`}>News
						</NavLink>
					</li>
					<li className={cl.side_bar_item}>
						<div className={cl.left_menu_icon}>
							<img src={musicIcon}/>
						</div>
						<NavLink to="/music"
									className={({ isActive }) => isActive ? `${cl.activeLink}` : `${cl.left_label}`}>Music
						</NavLink>
					</li>
					<li className={cl.side_bar_item}>
						<div className={cl.left_menu_icon}>
							<img src={settingsIcon}/>
						</div>
						<NavLink to="/settings" className={({ isActive }) => isActive ? `${cl.activeLink}` : `${cl.left_label}`}>Settings
						</NavLink>
					</li>
				</ol>
			</nav>
		</div>
	)
}

export default SideBar;