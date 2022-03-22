import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsData = [
	{id: 1, name: 'Alexander'},
	{id: 2, name: 'Sergey'},
	{id: 3, name: 'Sveta'},
	{id: 4, name: 'Julia'},
	{id: 5, name: 'Stepan'}
];

let messagesData = [
	{id: 1, message: 'Hello'},
	{id: 2, message: 'Check this linnk'},
	{id: 3, message: 'Once upon a time'},
	{id: 4, message: 'I missed about you'},
	{id: 5, message: 'Once upon a time'}
];

let postsData = [
	{id: 1, message: 'Hi, How are you?', likes: 20},
	{id: 2, message: 'It is my first Post', likes: 11},
	{id: 3, message: 'Second', likes: 10},
];

ReactDOM.render(
	<React.StrictMode>
   <App dialogsData={dialogsData} postsData={postsData} messagesData={messagesData}/>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
