import cl from './SideBarItem.module.css';
import { NavLink } from 'react-router-dom';

const SideBarItem = (props) => {
  return (
    <li className={cl.side_bar_item}>
      <div className={cl.left_menu_icon}>
        <img src={props.icon} alt='icon' />
      </div>
      <NavLink to={props.link} className={({ isActive }) => (isActive ? `${cl.activeLink}` : `${cl.left_label}`)}>
        {props.SideBarItem}
      </NavLink>
    </li>
  );
};

export default SideBarItem;
