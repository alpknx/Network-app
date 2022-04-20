import profileReducer, {onAddPostAC, deletePost} from "./profile-reducer";
import ReactDOM from "react-dom";
import App from "../App";
import React from "react";

let state = {
	postsData: [
		{id: 1, message: 'Hi, how are you?', likesCount: 12},
		{id: 2, message: 'It\'s my first post', likesCount: 11},
		{id: 3, message: 'Blabla', likesCount: 11},
		{id: 4, message: 'Dada', likesCount: 11}
	]
};

test('length of posts should be incremented', () => {
	// 1. test data
	let action = onAddPostAC("it-kamasutra.com");

	// 2. action
	let newState = profileReducer(state, action);

	// 3. expectation
	expect(newState.postsData.length).toBe(5);

});

test('message of new post should be correct', () => {
	// 1. test data
	let action = onAddPostAC("it-kamasutra.com");

	// 2. action
	let newState = profileReducer(state, action);

	// 3. expectation
	expect(newState.postsData[4].message).toBe("it-kamasutra.com");
});

test('after deleting length of messages should be decrement', () => {
	// 1. test data
	let action = deletePost(1);

	// 2. action
	let newState = profileReducer(state, action);

	// 3. expectation
	expect(newState.postsData.length).toBe(3);
});

test(`after deleting length shouldn't be decrement if id is incorrect`, () => {
	// 1. test data
	let action = deletePost(1000);

	// 2. action
	let newState = profileReducer(state, action);

	// 3. expectation
	expect(newState.postsData.length).toBe(4);
});
