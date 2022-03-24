import SideBar from './SideBar';
import { connect } from 'react-redux';
import {setFriendsAC,setFriendProfileAC,toggleIsFetchingAC,setFriendsCountAC,setCurrentPageAC} from '../../Redux/sidebar-reducer';
import React from 'react';
import { useMatch } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';
import { sidebarApi } from '../../api/api';

class SidebarContainer extends React.Component {
	componentDidMount() {
		this.props.toggleIsFetchingAC(true);
		sidebarApi.getFriends(this.props.currentPage, this.props.pageSize)
			.then(data => {
				this.props.toggleIsFetchingAC(false);
				this.props.setFriendsAC(data.items);
				//this.props.setFriendsCountAC(response.data.totalCount);
			});

		let friendId = this.props.match ? this.props.match.params.userId : '22860';
		sidebarApi.getFriendProfile(friendId)
			.then(data => {
				this.props.setFriendProfileAC(data);
			});
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

export default connect(mapStateToProps, {setFriendsAC,setFriendProfileAC,setFriendsCountAC,toggleIsFetchingAC,setCurrentPageAC}) (FriendURLMatch) 
