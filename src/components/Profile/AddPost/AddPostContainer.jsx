import { connect } from 'react-redux';
import { onAddPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/profile-reducer';
import AddPost from './AddPost';

let mapStateToProps =(state) => {
	return {
		newPostText: state.profilePage.newPostText
	}
}
let mapDispatchToProps =(dispatch) => {
	return {
		updateNewPostText: (text) => {
			dispatch(updateNewPostTextActionCreator(text));
		},
		onAddPost: () => {
			dispatch(onAddPostActionCreator())
		}
	}
}

const AddPostContainer = connect(mapStateToProps, mapDispatchToProps) (AddPost);

export default AddPostContainer;
