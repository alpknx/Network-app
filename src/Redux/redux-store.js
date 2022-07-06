import { applyMiddleware, combineReducers, createStore } from 'redux';
import authReducer from './auth-reducer';
import dialogsReducer from './messages-reducer';
import profileReducer from './profile-reducer';
import usersReducer from './users-reducer';
import thunkMiddleware from 'redux-thunk';
import appReducer from './app-reducer';

let reducers = combineReducers({
  //perceive as state
  profilePage: profileReducer,
  messagesPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
});

let reduxStore = createStore(reducers, applyMiddleware(thunkMiddleware));

export default reduxStore;
