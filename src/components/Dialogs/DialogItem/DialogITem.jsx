import { NavLink } from 'react-router-dom';
import cl from './DialogItem.module.css'

const DialogItem = (props) => {

	let path = "/dialogs/" + props.id
	return(
		<li className={cl.dialog_item}>
			<div className={cl.left_menu_icon}>
				<img src={props.img}/>
			</div>
			<NavLink to={path}
						className={({ isActive }) => isActive ? `${cl.activeLink}` : `${cl.dialog_item}`}>{props.name}
			</NavLink>
		</li>
	);
}

export default DialogItem;
