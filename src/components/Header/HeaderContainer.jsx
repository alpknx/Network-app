import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../Redux/auth-reducer";
import { authAPI } from "../../api/api";

class HeaderContainer extends React.Component {
	componentDidMount() {
		authAPI.getAuth()
			.then(data => {
					if (data.resultCode === 0) {
						let {email,id, login} = data.data;
						this.props.setAuthUserData(email, id, login);
					}
			});
	}

	render() {
		return <Header {...this.props} />
	}
}
const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login,
});

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);
