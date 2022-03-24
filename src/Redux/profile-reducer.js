import { profileAPI, usersAPI } from '../api/api';
import profileImg from './../components/assets/img/profile-img.png';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
	postsData: [
		{id: 1, message: 'Hi, How are you?', likes: 20, img:`${profileImg}`},
		{id: 2, message: 'It is my first Post', likes: 11, img:`${profileImg}`},
		{id: 3, message: 'Second', likes: 10, img:`${profileImg}`},
		],
		newPostText: '',
		status: ''
}

const profileReducer = (state = initialState , action) => {
	switch (action.type) {
		case ADD_POST: {
			let newPost = {
			id: 4,
			message: state.newPostText,
			likes: 10,
			img:`${profileImg}` 
			};
			return {
				...state,
				postsData: [...state.postsData, newPost],
				newPostText: ''
			}
		
		}
		case UPDATE_NEW_POST_TEXT: {
			return {
				...state,
				newPostText: action.newText
			}
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

		default:
			return state;
	}
	
}

export const onAddPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => 
	({type: UPDATE_NEW_POST_TEXT,newText: text});
export const setUserProfileAC = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status})

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
