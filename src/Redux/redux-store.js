import {applyMiddleware, combineReducers, createStore} from 'redux';
import authReducer from './auth-reducer';
import dialogsReducer from './messages-reducer';
import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({//perceive as state
	profilePage: profileReducer,
	messagesPage: dialogsReducer,
	sidebar: sidebarReducer,
	usersPage: usersReducer,
	auth: authReducer
})
	

let reduxStore = createStore(reducers, applyMiddleware(thunkMiddleware));

export default reduxStore;
