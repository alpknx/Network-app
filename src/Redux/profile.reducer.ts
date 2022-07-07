import { stopSubmit } from 'redux-form';
import { profileAPI } from '../api/api';
import profileImg from '../components/assets/img/profile-img.png';
import { PhotosType, PostType, ProfileType } from '../types/types';

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
  ] as Array<PostType>,
  profile: null as ProfileType | null,
  status: '',
};

export type InitialStateType = typeof initialState;

const profileReducer = (state = initialState, action: any): InitialStateType => {
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
      return { ...state, profile: { ...state.profile, photos: action.photos } as ProfileType };
    }

    case DELETE_POST:
      return { ...state, postsData: state.postsData.filter((p) => p.id !== action.postId) };

    default:
      return state;
  }
};

type AddPostActionCreatorActionType = {
  type: typeof ADD_POST;
  newPostBody: string;
};

export const onAddPostActionCreator = (newPostBody: string): AddPostActionCreatorActionType => ({
  type: ADD_POST,
  newPostBody,
});

type SetUserProfileActionType = {
  type: typeof SET_USER_PROFILE;
  profile: ProfileType;
};

export const setUserProfileActionCreator = (profile: ProfileType): SetUserProfileActionType => ({
  type: SET_USER_PROFILE,
  profile,
});

type SetStatusActionType = {
  type: typeof SET_STATUS;
  status: string;
};

export const setStatusActionCreator = (status: string): SetStatusActionType => ({ type: SET_STATUS, status });

type DeletePostActionType = {
  type: typeof DELETE_POST;
  postId: number;
};
export const deletePostActionCreator = (postId: number): DeletePostActionType => ({ type: DELETE_POST, postId });

type SavePhotoSuccessActionType = {
  type: typeof SAVE_PHOTO_SUCCESS;
  photos: PhotosType;
};

export const savePhotoSuccessActionCreator = (photos: PhotosType): SavePhotoSuccessActionType => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
});

export const getUserProfile = (userId: number) => (dispatch: any) => {
  profileAPI.getProfile(userId).then((data: any) => {
    dispatch(setUserProfileActionCreator(data));
  });
};

export const getStatus = (userId: number) => (dispatch: any) => {
  profileAPI.getStatus(userId).then((data: any) => {
    dispatch(setStatusActionCreator(data));
  });
};

// eslint-disable-next-line consistent-return
export const updateStatus = (status: string) => async (dispatch: any) => {
  try {
    const response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
      dispatch(setStatusActionCreator(status));
    }
  } catch (error) {
    return 'Some error';
  }
};

export const savePhoto = (file: any) => async (dispatch: any) => {
  const response = await profileAPI.savePhoto(file);

  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccessActionCreator(response.data.data.photos));
  }
};

// eslint-disable-next-line consistent-return
export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
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
