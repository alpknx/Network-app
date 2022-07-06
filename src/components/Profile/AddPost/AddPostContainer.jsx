import { connect } from 'react-redux';
import { compose } from 'redux';
import { onAddPostAC } from '../../../Redux/profile.reducer';
import AddPost from './AddPost';

const mapStateToProps = (state) => ({
  profilePage: state.profilePage,
});
const mapDispatchToProps = (dispatch) => ({
  onAddPost: (newPostBody) => {
    dispatch(onAddPostAC(newPostBody));
  },
});

export default compose(connect(mapStateToProps, mapDispatchToProps))(AddPost);
