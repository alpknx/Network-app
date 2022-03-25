import { connect } from 'react-redux';
import React from 'react';
import Users from './Users';
import { followAC,unFollowAC, setCurrentPageAC, toggleFollowingProgressAC, getUsersThunkCreator 
	,setPostFollowThunkCreator, setDeleteFollowThunkCreator} from '../../Redux/users-reducer';
import Preloader from '../Preloader/Preloader';
import { compose } from 'redux';
import {
	getCurrentPage,
	getFollowingInProgress,
	getIsFetching,
	getPageSize,
	getTotalUsersCount, getUsers
} from '../../Redux/users-selectors';

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
		users: getUsers(state),
		pageSize: getPageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followingInProgress: getFollowingInProgress(state)
	}	
}

export default compose(connect(mapStateToProps, {
	follow:followAC,
	unfollow:unFollowAC,
	setCurrentPage:setCurrentPageAC,
	toggleFollowingProgress:toggleFollowingProgressAC,
	getUsersThunk: getUsersThunkCreator,
	setPostFollowThunk: setPostFollowThunkCreator,
	setDeleteFollowThunk: setDeleteFollowThunkCreator
	}))(UsersContainer);

