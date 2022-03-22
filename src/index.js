import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reduxStore from './Redux/redux-store';

export let rerenderEntireTree = (state) => {
	ReactDOM.render(
		<React.StrictMode>
		<App state={state} dispatch={reduxStore.dispatch.bind(reduxStore)} reduxStore={reduxStore}/>
		</React.StrictMode>,
		document.getElementById('root')
	);
} 

rerenderEntireTree(reduxStore.getState());

reduxStore.subscribe(() => {
	let state = reduxStore.getState();
	rerenderEntireTree(state);
});

