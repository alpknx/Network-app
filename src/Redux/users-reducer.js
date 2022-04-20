import { usersAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'; //preloader
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
	users: [],
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false, //preloader
	followingInProgress: []
}

const usersReducer = (state = initialState , action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map( user =>  {
					if (user.id === action.userId) {
						return {...user, followed: true}
					}
					return user;
				})
		}
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map( user =>  {
					if (user.id === action.userId) {
						return {...user, followed: false}
					}
					return user;
			})
		}

		case SET_USERS: {
			return { ...state,
				users:[ ...state.users, ...action.users ],
				
			  }
      }
		case SET_CURRENT_PAGE: {
         return { ...state,
						currentPage: action.currentPage}
      }
		case SET_TOTAL_USERS_COUNT: {
         return { ...state,
						totalUsersCount: action.count}
      }
		case TOGGLE_IS_FETCHING: {
         return { ...state,
						isFetching: action.isFetching}
      }
		case TOGGLE_IS_FOLLOWING_PROGRESS: {
			return {
				...state,
				followingInProgress: action.isFetching
					? [...state.followingInProgress, action.userId]
					: state.followingInProgress.filter(id => id != action.userId)
			}
		}
		default:
			return state;
	}
	
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unFollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users })
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export const toggleIsFetchingAC= (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgressAC = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })

export const getUsersThunkCreator = (currentPage, pageSize) => { 
	return(dispatch) => {
	dispatch(toggleIsFetchingAC(true));
		usersAPI.getUsers(currentPage, pageSize)
		.then(response => {
				dispatch(toggleIsFetchingAC(false));
				dispatch(setCurrentPageAC(currentPage))
				dispatch(setUsersAC(response.data.items));
				dispatch(setTotalUsersCountAC(response.data.totalCount));
			});
		}
}
export const setPostFollowThunkCreator = (userId) => { 
	return(dispatch) => {
		usersAPI.postFollow(userId)
		.then(data => {
				if (data.resultCode === 0) {
					dispatch(toggleFollowingProgressAC(true, userId));
					dispatch(followAC(userId));
					dispatch(toggleFollowingProgressAC(false, userId));
				}
			});
		}
}

export const setDeleteFollowThunkCreator = (userId) => { 
	return(dispatch) => {
		usersAPI.deleteFollow(userId)
		.then(data => {
				if (data.resultCode === 0) {
					dispatch(toggleFollowingProgressAC(true, userId));
					dispatch(unFollowAC(userId));
					dispatch(toggleFollowingProgressAC(false, userId));
				}
			});
		}
}



export default usersReducer;
