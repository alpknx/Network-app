import cl from './Dialogs.module.css'
import profileIcon from './../assets/img/sidebar/profile-icon.png';
import { NavLink } from 'react-router-dom';

const Dialogs = (props) => {
	return (
		<div className={cl.dialogs_page}>
			<div className={cl.header_page}>
				<h2>Dialogs</h2>
			</div>
			<div className={cl.message_section}>
				<ul className={cl.dialogs_list}>
					<li className={cl.dialog_item}>
						<div className={cl.left_menu_icon}>
							<img src={profileIcon}/>
						</div>
						<NavLink to="/dialogs/1" 
									className={({ isActive }) => isActive ? `${cl.activeLink}` : `${cl.dialog_item}`}>Alexander
						</NavLink>
					</li>
					<li className={cl.dialog_item}>
					<div className={cl.left_menu_icon}>
							<img src={profileIcon}/>
						</div>
						<NavLink to="/dialogs/2" 
									className={({ isActive }) => isActive ? `${cl.activeLink}` : `${cl.dialog_item}`}>Sergey
						</NavLink>
					</li>
					<li className={cl.dialog_item}>
					<div className={cl.left_menu_icon}>
							<img src={profileIcon}/>
						</div>
						<NavLink to="/dialogs/3" 
									className={({ isActive }) => isActive ? `${cl.activeLink}` : `${cl.dialog_item}`}>Sveta
						</NavLink>
					</li>
					<li className={cl.dialog_item}>
					<div className={cl.left_menu_icon}>
							<img src={profileIcon}/>
						</div>
						<NavLink to="/dialogs/4" 
									className={({ isActive }) => isActive ? `${cl.activeLink}` : `${cl.dialog_item}`}>Julia
						</NavLink>
					</li>
					<li className={cl.dialog_item}>
					<div className={cl.left_menu_icon}>
							<img src={profileIcon}/>
						</div>
						<NavLink to="/dialogs/5" 
									className={({ isActive }) => isActive ? `${cl.activeLink}` : `${cl.dialog_item}`}>Stepan
						</NavLink>
					</li>
				</ul>
				<ul className={cl.messages_list}>
					<li className={cl.message_item}>
						<div className={cl.left_menu_icon}>
							<img src={profileIcon}/>
						</div>
						Hello
					</li>
					<li className={cl.message_item}>
						<div className={cl.left_menu_icon}>
							<img src={profileIcon}/>
						</div>
						Check this linnk
					</li>
					<li className={cl.message_item}>
						<div className={cl.left_menu_icon}>
							<img src={profileIcon}/>
						</div>
						Once upon a time
					</li>
					<li className={cl.message_item}>
						<div className={cl.left_menu_icon}>
							<img src={profileIcon}/>
						</div>
						I missed about you
					</li>
					<li className={cl.message_item}>
						<div className={cl.left_menu_icon}>
							<img src={profileIcon}/>
						</div>
						Need to talk
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Dialogs;
