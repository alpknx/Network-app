import React from 'react';
import Profile from './Profile';
import {setUserProfileAC} from '../../Redux/profile-reducer';
import axios from 'axios';
import { connect } from 'react-redux';
import { useMatch } from 'react-router-dom';
import { profileAPI } from '../../api/api';

class ProfileContainer extends React.Component {

	componentDidMount() {
		let userId = this.props.match ? this.props.match.params.userId : '22860';
		profileAPI.getProfile(userId)
			.then(data => {
				this.props.setUserProfileAC(data);
			});
	}

	render() {
		return (
			<Profile {...this.props} profile={this.props.profile}/>
		);
	}
}

const ProfileURLMatch = (props) => {
	const match = useMatch('/profile/:userId/');
	return <ProfileContainer {...props} match={match} />
}

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile
});

export default connect(mapStateToProps, {setUserProfileAC})(ProfileURLMatch);
