import { connect } from 'react-redux';
import { followAC, setUsersAC, unFollowAC } from '../../Redux/users-reducer';
import UsersClass from './UsersClass';

let mapStateToProps = (state) => {
	return {
	users: state.usersPage.users 
	}
}

let mapDispatchToProps = (dispatch) => {
	return{
		follow: (userId) => {
			dispatch(followAC(userId));
		},
		unfollow: (userId) => {
			dispatch(unFollowAC(userId));
		},
		setUsers: (users) => {
			dispatch(setUsersAC(users));
		}
	}
}

const UsersConstainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass);

export default UsersConstainer;
