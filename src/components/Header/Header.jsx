import logoHeader from './../assets/img/logoHeader.png'
import cl from './Header.module.css';

const Header = () => {
	return (
		<div className={cl.app_header_wrapper}>
			<div className={cl.header_img}>
				<img src={logoHeader} alt="logoHeader"/>
			</div>
			<div className={cl.header_name}>
				Network
			</div>
			<div className={cl.header_login}>
				Login
			</div>
		</div>
	)
}

export default Header;
