import { profileAPI, usersAPI } from '../api/api';
import profileImg from './../components/assets/img/profile-img.png';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let initialState = {
	postsData: [
		{id: 1, message: 'Hi, How are you?', likes: 20, img:`${profileImg}`},
		{id: 2, message: 'It is my first Post', likes: 11, img:`${profileImg}`},
		{id: 3, message: 'Second', likes: 10, img:`${profileImg}`},
		],
		profile: null,
		status: '',
}

const profileReducer = (state = initialState , action) => {
	switch (action.type) {
		case ADD_POST: {
			let body = action.newPostBody;
			return {
				...state,
				postsData: [...state.postsData, {id: 4, message: body, likes: 10, img:`${profileImg}`}]
			};
		
		}

	case SET_USER_PROFILE: {
			return {...state, profile: action.profile}
		}
	case SET_STATUS: {
			return {
				...state,
				status: action.status
		}
	}

	case SAVE_PHOTO_SUCCESS: {
         return {...state, 
				profile: {...state.profile, photos: action.photos }
		}
	}

	case DELETE_POST:
		return {...state, postsData: state.postsData.filter(p => p.id != action.postId)}

		default:
			return state;
	}
	
}

export const onAddPostAC = (newPostBody) => ({type: ADD_POST, newPostBody});
export const setUserProfileAC = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status})
export const deletePost = (postId) => ({type: DELETE_POST, postId})
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})

export const getUserProfile = (userId) => (dispatch) => {
	profileAPI.getProfile(userId)
	.then(data => {
		dispatch(setUserProfileAC(data));
	});
}

export const getStatus = (userId) => (dispatch) => {
	profileAPI.getStatus(userId)
		.then(data => {
			dispatch(setStatus(data));
		});
}

export const updateStatus = (status) => (dispatch) => {
profileAPI.updateStatus(status)
		.then(data => {
			if (data.resultCode === 0) {
				dispatch(setStatus(status));
			}
		});
}

export const savePhoto = (file) => async (dispatch) => {
	let response = await profileAPI.savePhoto(file);

	if (response.data.resultCode === 0) {
		dispatch(savePhotoSuccess(response.data.data.photos));
	}
}

export default profileReducer;
