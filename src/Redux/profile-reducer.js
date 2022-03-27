import { profileAPI, usersAPI } from '../api/api';
import profileImg from './../components/assets/img/profile-img.png';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

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

export default profileReducer;
