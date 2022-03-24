import * as  axios from 'axios';
import User from './User/User';
import cl from './Users.module.css';

const Users = (props) => {
	if (props.users.length === 0) {

		axios.get("https://social-network.samuraijs.com/api/1.0/users")
			.then(response => {
				props.setUsers(response.data.items);
			})

		
	}

	debugger;
	return (
		<div className={cl.users}>
			<User users={props.users} follow={props.follow} unfollow={props.unfollow}/>
		</div>
	);
}

export default Users;
