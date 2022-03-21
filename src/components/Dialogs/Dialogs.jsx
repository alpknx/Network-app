import cl from './Dialogs.module.css'
import profileIcon from './../assets/img/sidebar/profile-icon.png';

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
						Alexander
					</li>
					<li className={cl.dialog_item}>
					<div className={cl.left_menu_icon}>
							<img src={profileIcon}/>
						</div>
						Dmitry
					</li>
					<li className={cl.dialog_item}>
					<div className={cl.left_menu_icon}>
							<img src={profileIcon}/>
						</div>
						Sveta
					</li>
					<li className={cl.dialog_item}>
					<div className={cl.left_menu_icon}>
							<img src={profileIcon}/>
						</div>
						Julia
					</li>
					<li className={cl.dialog_item}>
					<div className={cl.left_menu_icon}>
							<img src={profileIcon}/>
						</div>
						Sergey
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
						Once upin a time
					</li>
					<li className={cl.message_item}>
						<div className={cl.left_menu_icon}>
							<img src={profileIcon}/>
						</div>
						I have never seen you for ages
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
