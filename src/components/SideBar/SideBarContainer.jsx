import SideBar from './SideBar';
import { connect } from 'react-redux';
import {getFriends,FriendProfile, setFriendsCountAC,setCurrentPageAC} from '../../Redux/sidebar-reducer';
import React from 'react';
import { useMatch } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';
import { sidebarApi } from '../../api/api';

class SidebarContainer extends React.Component {
	componentDidMount() {
		this.props.getFriends(this.props.currentPage, this.props.pageSize);
		let friendId = this.props.match ? this.props.match.params.userId : '22860';
		this.props.FriendProfile(friendId);
		
	}

	render() {
		return (
			<>
			{this.props.isFetching ? <Preloader/> : null}
			<SideBar friendsCount={this.props.friendsCount}
					friends = {this.props.friends}
					currentPage = {this.props.currentPage}
					pageSize = {this.props.pageSize}
					/>
			</>
		);

	}	
}

const FriendURLMatch = (props) => {
	const match = useMatch('/profile/:userId/');
	return <SidebarContainer {...props} match={match} />
}

let mapStateToProps =(state) => {
	return {
		friends: state.sidebar.friends,
		pageSize: state.sidebar.pageSize,
		isFetching : state.sidebar.isFetching,
		friendsCount: state.sidebar.friendsCount,
		currentPage: state.sidebar.currentPage,
	}
}

export default connect(mapStateToProps, {getFriends,FriendProfile,setFriendsCountAC,setCurrentPageAC}) (FriendURLMatch) 
