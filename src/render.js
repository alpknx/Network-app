import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {onAddPost} from './Redux/state';

export let rerenderEntireTree = (state) => {
	ReactDOM.render(
		<React.StrictMode>
		<App state={state} onAddPost={onAddPost}/>
		</React.StrictMode>,
		document.getElementById('root')
	);
} 
