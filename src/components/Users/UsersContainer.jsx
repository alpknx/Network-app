import { connect } from 'react-redux';
import { followAC, setUsersAC, unFollowAC, setCurrentPageAC, setTotalUsersCountAC } from '../../Redux/users-reducer';
import UsersClass from './UsersClass';

let mapStateToProps = (state) => {
	return {
	users: state.usersPage.users,
	pageSize: state.usersPage.pageSize,
	totalUsersCount: state.usersPage.totalUsersCount,
	currentPage: state.usersPage.currentPage
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
		},
		setCurrentPage: (pageNumber) => {
			dispatch(setCurrentPageAC(pageNumber));
		},
		setTotalUsersCount: (totalCount) => {
			dispatch(setTotalUsersCountAC(totalCount));
		}
	}
}

const UsersConstainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass);

export default UsersConstainer;
