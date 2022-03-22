import profileImg from './../components/assets/img/profile-img.png';

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

	getState() {
		return this._state
	},

	_callSubscriber() {
		console.log('state changed')
	},

	onAddPost(){
		let newPost = {
			id: 4,
			message: this._state.profilePage.newPostText,
			likes: 10,
			img:`${profileImg}` 
		}
		this._state.profilePage.postsData.push(newPost);
		this._state.profilePage.newPostText = '';
		this._callSubscriber(this._state);
	},

	updateNewPostText(newText){
		this._state.profilePage.newPostText = newText;
		this._callSubscriber(this._state);
	},

	onAddMessage (){
		let newMessage = {
			id: 4,
			message: this._state.messagesPage.newMessageText,
			likes: 10,
			img:`${profileImg}` 
		}
		this._state.messagesPage.messagesData.push(newMessage);
		this._state.messagesPage.newMessageText = '';
		this._callSubscriber(this._state);
	},

	updateNewMessageText(newText){
		this._state.messagesPage.newMessageText = newText;
		this._callSubscriber(this._state);
	},

	subscribe(observer){
		this._callSubscriber = observer; //observer button.addEventListener
	} 

}

export default store;
