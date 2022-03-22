import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, {onAddPost, updateNewPostText, onAddMessage, updateNewMessageText, subscribe} from './Redux/state';

let rerenderEntireTree = (state) => {
	ReactDOM.render(
		<React.StrictMode>
		<App state={state} onAddPost={onAddPost} updateNewPostText = {updateNewPostText}
				onAddMessage={onAddMessage} updateNewMessageText={updateNewMessageText}/>
		</React.StrictMode>,
		document.getElementById('root')
	);
} 

rerenderEntireTree(state);

subscribe(rerenderEntireTree);

