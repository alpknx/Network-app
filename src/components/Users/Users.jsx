import User from './User.jsx/User';
import cl from './Users.module.css';

const Users = (props) => {
	return (
		<div className={cl.users}>
			<User name="Alexander" location="Moscow"/>
			<User name="Alexander" location="Moscow"/>
		</div>
	);
}

export default Users;
