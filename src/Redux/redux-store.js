import {combineReducers, createStore} from 'redux';
import dialogsReducer from './messages-reducer';
import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';

let reducers = combineReducers({//perceive as state
	profilePage: profileReducer,
	messagesPage: dialogsReducer,
	sidebar: sidebarReducer,
	usersPage: usersReducer
})
	

let reduxStore = createStore(reducers);

export default reduxStore;
