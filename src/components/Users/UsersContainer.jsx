import { connect } from 'react-redux';
import React from 'react';
import Users from './Users';
import { followAC,unFollowAC, setCurrentPageAC, toggleFollowingProgressAC, getUsersThunkCreator 
	,setPostFollowThunkCreator, setDeleteFollowThunkCreator} from '../../Redux/users-reducer';
import Preloader from '../Preloader/Preloader';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';

class  UsersContainer extends React.Component{

	componentDidMount() {
		this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
		
	}

	onPageChanged = (pageNumber) => {
		this.props.getUsersThunk(pageNumber, this.props.pageSize);
	}

	setFollow = (userId) => {
		this.props.setPostFollowThunk(userId);
	}
		
	setUnFollow = (userId) => {
		this.props.setDeleteFollowThunk(userId)
	}

	render() {
		return (
			<>
			{this.props.isFetching ? <Preloader/> : null}
			<Users totalUsersCount={this.props.totalUsersCount}
					pageSize = {this.props.pageSize}
					currentPage = {this.props.currentPage}
					onPageChanged = {this.onPageChanged}
					users = {this.props.users}
					follow = {this.setFollow}
					unfollow = {this.setUnFollow}
					toggleFollowingProgress={this.props.toggleFollowingProgress}
               followingInProgress={this.props.followingInProgress}
					/>
			</>
		);

	}	
}

let mapStateToProps = (state) => {
	return {
	users: state.usersPage.users,
	pageSize: state.usersPage.pageSize,
	totalUsersCount: state.usersPage.totalUsersCount,
	currentPage: state.usersPage.currentPage,
	isFetching : state.usersPage.isFetching,
	followingInProgress: state.usersPage.followingInProgress
	}	
}

export default connect(mapStateToProps, {
	follow:followAC,
	unfollow:unFollowAC,
	setCurrentPage:setCurrentPageAC,
	toggleFollowingProgress:toggleFollowingProgressAC,
	getUsersThunk: getUsersThunkCreator,
	setPostFollowThunk: setPostFollowThunkCreator,
	setDeleteFollowThunk: setDeleteFollowThunkCreator
	})(UsersContainer);

