import { stopSubmit } from 'redux-form';
import { profileAPI } from '../api/api';
import profileImg from '../components/assets/img/profile-img.png';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

const initialState = {
  postsData: [
    {
      id: 1,
      message: 'Hi, How are you?',
      likes: 20,
      img: `${profileImg}`,
    },
    {
      id: 2,
      message: 'It is my first Post',
      likes: 11,
      img: `${profileImg}`,
    },
    {
      id: 3,
      message: 'Second',
      likes: 10,
      img: `${profileImg}`,
    },
  ],
  profile: null,
  status: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      const body = action.newPostBody;
      return {
        ...state,
        postsData: [
          ...state.postsData,
          {
            id: 4,
            message: body,
            likes: 10,
            img: `${profileImg}`,
          },
        ],
      };
    }

    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }

    case SAVE_PHOTO_SUCCESS: {
      return { ...state, profile: { ...state.profile, photos: action.photos } };
    }

    case DELETE_POST:
      return { ...state, postsData: state.postsData.filter((p) => p.id !== action.postId) };

    default:
      return state;
  }
};

export const onAddPostAC = (newPostBody) => ({ type: ADD_POST, newPostBody });
export const setUserProfileAC = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos });

export const getUserProfile = (userId) => (dispatch) => {
  profileAPI.getProfile(userId).then((data) => {
    dispatch(setUserProfileAC(data));
  });
};

export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then((data) => {
    dispatch(setStatus(data));
  });
};

// eslint-disable-next-line consistent-return
export const updateStatus = (status) => async (dispatch) => {
  try {
    const response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  } catch (error) {
    return 'Some error';
  }
};

export const savePhoto = (file) => async (dispatch) => {
  const response = await profileAPI.savePhoto(file);

  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
};

// eslint-disable-next-line consistent-return
export const saveProfile = (profile) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await profileAPI.saveProfile(profile);

  if (response.data.resultCode === 0) {
    dispatch(getUserProfile(userId));
  } else {
    dispatch(stopSubmit('edit-profile', { _error: response.data.messages[0] }));
    return Promise.reject(response.data.messages[0]);
  }
};

export default profileReducer;
