import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import authReducer from './auth.reducer';
import dialogsReducer from './messages.reducer';
import profileReducer from './profile.reducer';
import usersReducer from './users.reducer';
import appReducer from './app.reducer';

const reducers = combineReducers({
  // perceive as state
  profilePage: profileReducer,
  messagesPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
});

const reduxStore = createStore(reducers, applyMiddleware(thunkMiddleware));

export default reduxStore;
