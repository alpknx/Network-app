import SideBar from './SideBar';
import { connect } from 'react-redux';
import {setFriendsAC,setFriendProfileAC,toggleIsFetchingAC,setFriendsCountAC,setCurrentPageAC} from '../../Redux/sidebar-reducer';
import React from 'react';
import * as axios from 'axios';
import { useMatch } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';

class SidebarContainer extends React.Component {
	componentDidMount() {
		this.props.toggleIsFetchingAC(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.toggleIsFetchingAC(false);
				this.props.setFriendsAC(response.data.items);
				//this.props.setFriendsCountAC(response.data.totalCount);
			});

		let friendId = this.props.match ? this.props.match.params.userId : '22860';
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${friendId}`)
			.then(response => {
				this.props.setFriendProfileAC(response.data);
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
