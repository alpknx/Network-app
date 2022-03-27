import React from 'react';
import Profile from './Profile';
import {getStatus, getUserProfile, updateStatus, savePhoto, saveProfile} from "../../Redux/profile-reducer";
import { connect } from 'react-redux';
import { useMatch } from 'react-router-dom';

class ProfileContainer extends React.Component {

	refreshProfile() {
		let userId = this.props.match ? this.props.match.params.userId : this.props.authorizedUserId;
		if (!userId) {
				this.props.history.push("/login");
			}
		this.props.getUserProfile(userId);
		this.props.getStatus(userId);
	}

	componentDidMount() {
		this.refreshProfile();
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (this.props.match != prevProps.match ) {
				this.refreshProfile();
		}
	}

	render() {
		return (
			<Profile isOwner={!this.props.match} 
			{...this.props} profile={this.props.profile} status={this.props.status} 
			savePhoto={this.props.savePhoto} 
			updateStatus={this.props.updateStatus} />
		);
	}
}

const ProfileURLMatch = (props) => {
	const match = useMatch('/profile/:userId/');
	return <ProfileContainer {...props} match={match} 
				profile={props.profile} status={props.status} updateStatus={props.updateStatus}
				authorizedUserId={props.authorizedUserId}/>
}

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	status: state.profilePage.status,
	authorizedUserId: state.auth.userId,
	isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, 
	{getUserProfile, getStatus, updateStatus, savePhoto,saveProfile})(ProfileURLMatch);
