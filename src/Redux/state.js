import profileImg from './../components/assets/img/profile-img.png';


let state = {

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

}

export const onAddPost = () => {
	let newPost = {
		id: 4,
		message: state.profilePage.newPostText,
		likes: 10,
		img:`${profileImg}` 
	}
	state.profilePage.postsData.push(newPost);
	state.profilePage.newPostText = '';
	rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
	state.profilePage.newPostText = newText;
	rerenderEntireTree(state);
}

export const onAddMessage = () => {
	let newMessage = {
		id: 4,
		message: state.messagesPage.newMessageText,
		likes: 10,
		img:`${profileImg}` 
	}
	state.messagesPage.messagesData.push(newMessage);
	state.messagesPage.newMessageText = '';
	rerenderEntireTree(state);
}

export const updateNewMessageText = (newText) => {
	state.messagesPage.newMessageText = newText;
	rerenderEntireTree(state);
}

export const subscribe = (observer) => {
	rerenderEntireTree = observer; //observer button.addEventListener
} 


export default state;
