import React from 'react';
import Profile from './Profile';
import {getStatus, getUserProfile, updateStatus} from "../../Redux/profile-reducer";
import { connect } from 'react-redux';
import { useMatch } from 'react-router-dom';

class ProfileContainer extends React.Component {

	componentDidMount() {
		let userId = this.props.match ? this.props.match.params.userId : '22860';
		this.props.getUserProfile(userId);
		this.props.getStatus(userId);
	}

	render() {
		return (
			<Profile {...this.props} profile={this.props.profile} status={this.props.status} 
			updateStatus={this.props.updateStatus}/>
		);
	}
}

const ProfileURLMatch = (props) => {
	const match = useMatch('/profile/:userId/');
	return <ProfileContainer {...props} match={match} profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
}

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	status: state.profilePage.status
});

export default connect(mapStateToProps, {getUserProfile, getStatus, updateStatus})(ProfileURLMatch);
