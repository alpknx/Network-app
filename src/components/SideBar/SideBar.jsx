import profileIcon from './../assets/img/sidebar/profile-icon.png';
import messagesIcon from './../assets/img/sidebar/messages-icon.png';
import usersIcon from './../assets/img/sidebar/users-icon.png';
import newsIcon from './../assets/img/sidebar/news-icon.png';
import musicIcon from './../assets/img/sidebar/music-icon.png';
import settingsIcon from './../assets/img/sidebar/settings-icon.png';
import cl from './SideBar.module.css';
import SideBarItem from './SideBarItem/SideBarItem';
import Friends from './SideBarItem/Friends/Friends';

const SideBar = (props) => {
	return (
		<div className={cl.side_bar_inner}>
			<nav className={cl.side_bar_nav}>
				<ol className={cl.side_bar_ol}>
					<SideBarItem icon={profileIcon} link={"/profile"} SideBarItem="Profile"/>
					<SideBarItem icon={messagesIcon} link={"/dialogs"} SideBarItem="Messages"/>
					<SideBarItem icon={usersIcon} link={"/users"} SideBarItem="Users"/>
					<Friends friends = {props.friends}/>
					<SideBarItem icon={newsIcon} link={"/news"} SideBarItem="News"/>
					<SideBarItem icon={musicIcon} link={"/music"} SideBarItem="Music"/>
					<SideBarItem icon={settingsIcon} link={"/settings"} SideBarItem="Settings"/>
				</ol>
			</nav>
		</div>
	)
}

export default SideBar;
