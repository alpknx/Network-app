import { sidebarApi } from "../api/api";

const SET_FRIEND_PROFILE = 'SET_FRIEND_PROFILE';
const FRIENDS_COUNT = 'FRIENDS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const SET_FRIENDS = 'SET-FRIENDS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';

let initialState = {
	friends: [],
	pageSize: 6,
	friendsCount: 6,
	isFetching: false //preloader
}

const sidebarReducer = (state = initialState , action) => {
	switch (action.type) {
		case SET_FRIENDS: {
         return { ...state,
						friends: [ ...action.friends ]}
      }
		case SET_FRIEND_PROFILE: {
			return {...state, profile: action.profile}
		}
		case FRIENDS_COUNT: {
         return { ...state,
						friendsCount: action.friendsCount}
      }
		case SET_CURRENT_PAGE: {
         return { ...state,
						currentPage: action.currentPage}
      }
		case TOGGLE_IS_FETCHING: {
         return { ...state,
						isFetching: action.isFetching}
      }
		default:
			return state;
	}
}

export const setFriendProfileAC = (profile) => ({type: SET_FRIEND_PROFILE, profile});
export const setFriendsAC = (friends) => ({type: SET_FRIENDS, friends })
export const setFriendsCountAC = (friendsCount) => ({type: FRIENDS_COUNT, friendsCount: friendsCount})
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage })
export const toggleIsFetchingAC= (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export const getFriends = (currentPage, pageSize) => (dispatch) => {
	dispatch(toggleIsFetchingAC(true));
	sidebarApi.getFriends(currentPage, pageSize)
		.then(data => {
			dispatch(toggleIsFetchingAC(false));
			dispatch(setFriendsAC(data.items));
			//dispatch(setFriendsCountAC(data.totalCount));
		});
}

export const FriendProfile = (friendId) => (dispatch) => {
	sidebarApi.getFriendProfile(friendId)
		.then(data => {
			dispatch(setFriendProfileAC(data));
		});
}

export default sidebarReducer;
