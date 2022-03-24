import { NavLink } from 'react-router-dom';
import logoHeader from './../assets/img/logoHeader.png'
import cl from './Header.module.css';

const Header = (props) => {
	return (
		<div className={cl.app_header_wrapper}>
			<div className={cl.header_img}>
				<img src={logoHeader} alt="logoHeader"/>
			</div>
			<div className={cl.header_name}>
				Network
			</div>
			<div className={cl.header_login}>
			{ props.isAuth ? props.login
               : <NavLink to={'/login'}>Login</NavLink> }
			</div>
		</div>
	)
}

export default Header;
