import { connect } from 'react-redux';
import { compose } from 'redux';
import MyPosts from './MyPosts';

let mapStateToProps =(state) => {
	return {
		postsData: state.profilePage.postsData
	}
}

export default compose(connect(mapStateToProps, null)) (MyPosts);
