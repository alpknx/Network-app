import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './Redux/state';

export let rerenderEntireTree = (state) => {
	ReactDOM.render(
		<React.StrictMode>
		<App state={state} 
				onAddPost={store.onAddPost.bind(store)} 
				updateNewPostText = {store.updateNewPostText.bind(store)}
				onAddMessage={store.onAddMessage.bind(store)} 
				updateNewMessageText={store.updateNewMessageText.bind(store)}/>
		</React.StrictMode>,
		document.getElementById('root')
	);
} 

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

