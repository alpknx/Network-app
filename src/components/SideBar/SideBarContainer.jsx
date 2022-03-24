import SideBar from './SideBar';
import { connect } from 'react-redux';
import {setFriendsAC,setFriendProfileAC,setFriendsCountAC,toggleIsFetchingAC} from '../../Redux/sidebar-reducer';
import React from 'react';
import * as axios from 'axios';
import { useMatch } from 'react-router-dom';

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
		return(
			<SideBar {...this.props} friends={this.props.friends}/>
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
		isFetching : state.sidebar.isFetching,
		friendsCount: state.usersPage.friendsCount,
	}
}

export default connect(mapStateToProps, {setFriendsAC,setFriendsCountAC, setFriendProfileAC,toggleIsFetchingAC}) (FriendURLMatch) 
