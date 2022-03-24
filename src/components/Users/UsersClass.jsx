import * as  axios from 'axios';
import User from './User/User';
import cl from './Users.module.css';
import React from 'react';

class  Users extends React.Component{

	constructor(props) {
		super(props);
		if (this.props.users.length === 0) {
	
			axios.get("https://social-network.samuraijs.com/api/1.0/users")
				.then(response => {
					this.props.setUsers(response.data.items);
				});
	
			
		}
	}

	render() {
		return (
			<div className={cl.users}>
				<User users={this.props.users} follow={this.props.follow} unfollow={this.props.unfollow}/>
			</div>
		);

	}	
}

export default Users;
