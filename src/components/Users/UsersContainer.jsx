import { connect } from 'react-redux';
import { followAC, setUsersAC, unFollowAC } from '../../Redux/users-reducer';
import Users from './Users';

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

const UsersConstainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersConstainer;
