import { connect } from 'react-redux';
import { compose } from 'redux';
import { onAddPostAC } from '../../../Redux/profile-reducer';
import AddPost from './AddPost';

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    onAddPost: (newPostBody) => {
      dispatch(onAddPostAC(newPostBody));
    },
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(AddPost);
