import {combineReducers, createStore} from 'redux';
import dialogsReducer from './messages-reducer';
import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';

let reducers = combineReducers({//perceive as state
	profilePage: profileReducer,
	messagesPage: dialogsReducer,
	sidebar: sidebarReducer
})
	

let reduxStore = createStore(reducers);

export default reduxStore;