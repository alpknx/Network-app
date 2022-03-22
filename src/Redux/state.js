import profileImg from './../components/assets/img/profile-img.png';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
	_state: {
		profilePage : {
				postsData: [
			{id: 1, message: 'Hi, How are you?', likes: 20, img:`${profileImg}`},
			{id: 2, message: 'It is my first Post', likes: 11, img:`${profileImg}`},
			{id: 3, message: 'Second', likes: 10, img:`${profileImg}`},
			],
			newPostText: ''
		},
	
		messagesPage : {
			dialogsData:[
				{id: 1, name: 'Alexander', img:`${profileImg}`},
				{id: 2, name: 'Sergey', img:`${profileImg}`},
				{id: 3, name: 'Sveta', img:`${profileImg}`},
				{id: 4, name: 'Julia', img:`${profileImg}`},
				{id: 5, name: 'Stepan', img:`${profileImg}`}
			],
	
			messagesData:[
				{id: 1, message: 'Hello', img:`${profileImg}`},
				{id: 2, message: 'Check this linnk', img:`${profileImg}`},
				{id: 3, message: 'Once upon a time', img:`${profileImg}`},
				{id: 4, message: 'I missed about you', img:`${profileImg}`},
				{id: 5, message: 'Once upon a time', img:`${profileImg}`}
			],
			newMessageText:''
		},
	
		sidebar: {
			friends: [
				{id: 1, name: "Julia", img: `${profileImg}` },
				{id: 2, name: "Stepan", img: `${profileImg}` },
				{id: 3, name: "Ivan", img: `${profileImg}` }
			]
		}
	
	},

	_callSubscriber() {
		console.log('state changed')
	},

	getState() {
		return this._state
	},

	subscribe(observer){
		this._callSubscriber = observer; //observer button.addEventListener
	}, 

	dispatch(action) {
		if(action.type === 'ADD-POST') {
			let newPost = {
				id: 4,
				message: this._state.profilePage.newPostText,
				likes: 10,
				img:`${profileImg}` 
			}
			this._state.profilePage.postsData.push(newPost);
			this._state.profilePage.newPostText = '';
			this._callSubscriber(this._state);
		} else if (action.type === 'UPDATE-NEW-POST-TEXT') {
			this._state.profilePage.newPostText = action.newText;
			this._callSubscriber(this._state);
		}

		if(action.type === 'ADD-MESSAGE') {
			let newMessage = {
				id: 4,
				message: this._state.messagesPage.newMessageText,
				likes: 10,
				img:`${profileImg}` 
			}
			this._state.messagesPage.messagesData.push(newMessage);
			this._state.messagesPage.newMessageText = '';
			this._callSubscriber(this._state);
		} else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
			this._state.messagesPage.newMessageText = action.newText;
			this._callSubscriber(this._state);
		}
	}
	
}

export const onAddPostActionCreator = () => {
	return {
		type: ADD_POST
	}
}
export const updateNewPostTextActionCreator = (text) => {
	return {
		type: UPDATE_NEW_POST_TEXT,
		newText: text
	}
}
export const onAddMessageActionCreator = () => {
	return {
		type: ADD_MESSAGE
	}
}
export const updateNewMessageTextActionCreator = (text) => {
	return {
		type: UPDATE_NEW_MESSAGE_TEXT,
		newText: text
	}
}

export default store;
