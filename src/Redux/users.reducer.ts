import { usersAPI } from '../api/api';
import { UserType } from '../types/types';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'; // preloader
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

const initialState = {
  users: [] as Array<UserType>,
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false, // preloader
  followingInProgress: [] as Array<number>,
};

type InitialState = typeof initialState;

const usersReducer = (state = initialState, action: any): InitialState => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };

    case SET_USERS: {
      if (state.users.length > 0) {
        return state;
      }
      return { ...state, users: [...state.users, ...action.users] };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.count };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    }
    default:
      return state;
  }
};

type FollowSuccessActionType = {
  type: typeof FOLLOW;
  userId: number;
};

export const followActionCreator = (userId: number): FollowSuccessActionType => ({ type: FOLLOW, userId });

type UnfollowSuccessActionType = {
  type: typeof UNFOLLOW;
  userId: number;
};
export const unFollowActionCreator = (userId: number): UnfollowSuccessActionType => ({ type: UNFOLLOW, userId });

type SetUsersActionType = {
  type: typeof SET_USERS;
  users: Array<UserType>;
};
export const setUsersActionCreator = (users: Array<UserType>): SetUsersActionType => ({ type: SET_USERS, users });

type SetCurrentPageActionType = {
  type: typeof SET_CURRENT_PAGE;
  currentPage: number;
};

export const setCurrentPageActionCreator = (currentPage: number): SetCurrentPageActionType => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

type SetTotalUsersCountActionType = {
  type: typeof SET_TOTAL_USERS_COUNT;
  count: number;
};

export const setTotalUsersCountActionCreator = (totalUsersCount: number): SetTotalUsersCountActionType => ({
  type: SET_TOTAL_USERS_COUNT,
  count: totalUsersCount,
});

type ToggleIsFetchingActionType = {
  type: typeof TOGGLE_IS_FETCHING;
  isFetching: boolean;
};
export const toggleIsFetchingActionCreator = (isFetching: boolean): ToggleIsFetchingActionType => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

type ToggleFollowingProgressActionType = {
  type: typeof TOGGLE_IS_FOLLOWING_PROGRESS;
  isFetching: boolean;
  userId: number;
};

export const toggleFollowingProgressActionCcreator = (
  isFetching: boolean,
  userId: number
): ToggleFollowingProgressActionType => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId,
});

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => (dispatch: any) => {
  dispatch(toggleIsFetchingActionCreator(true));
  usersAPI.getUsers(currentPage, pageSize).then((response: any) => {
    dispatch(toggleIsFetchingActionCreator(false));
    dispatch(setCurrentPageActionCreator(currentPage));
    dispatch(setUsersActionCreator(response.data.items));
    dispatch(setTotalUsersCountActionCreator(response.data.totalCount));
  });
};
export const setPostFollowThunkCreator = (userId: number) => (dispatch: any) => {
  usersAPI.postFollow(userId).then((data: any) => {
    if (data.resultCode === 0) {
      dispatch(toggleFollowingProgressActionCcreator(true, userId));
      dispatch(followActionCreator(userId));
      dispatch(toggleFollowingProgressActionCcreator(false, userId));
    }
  });
};

export const setDeleteFollowThunkCreator = (userId: number) => (dispatch: any) => {
  usersAPI.deleteFollow(userId).then((data: any) => {
    if (data.resultCode === 0) {
      dispatch(toggleFollowingProgressActionCcreator(true, userId));
      dispatch(unFollowActionCreator(userId));
      dispatch(toggleFollowingProgressActionCcreator(false, userId));
    }
  });
};

export default usersReducer;
