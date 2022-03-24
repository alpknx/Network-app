import { connect } from 'react-redux';
import MyPosts from './MyPosts';

let mapStateToProps =(state) => {
	return {
		postsData: state.profilePage.postsData
	}
}

const MyPostsContainer = connect(mapStateToProps, null) (MyPosts);

export default MyPostsContainer;
