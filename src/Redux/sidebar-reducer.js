const SET_FRIEND_PROFILE = 'SET_FRIEND_PROFILE';
const FRIENDS_COUNT = 'FRIENDS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const SET_FRIENDS = 'SET-FRIENDS';

let initialState = {
	friends: [],
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
						friendsCount: action.count}
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
export const setFriendsCountAC = (friendsCount) => ({type: FRIENDS_COUNT, count: friendsCount})
export const toggleIsFetchingAC= (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export default sidebarReducer;
