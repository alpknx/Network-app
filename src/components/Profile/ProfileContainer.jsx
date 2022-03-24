import React from 'react';
import Profile from './Profile';
import {getUserProfile} from '../../Redux/profile-reducer';
import { connect } from 'react-redux';
import { useMatch } from 'react-router-dom';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

	componentDidMount() {
		let userId = this.props.match ? this.props.match.params.userId : '22860';
		this.props.getUserProfile(userId);
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
	profile: state.profilePage.profile,
});

export default connect(mapStateToProps, {getUserProfile})(ProfileURLMatch);
