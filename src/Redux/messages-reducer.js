import profileImg from './../components/assets/img/profile-img.png';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
}

const messagesReducer = (state = initialState , action) => {
	let stateCopy ;
	switch (action.type) {
		case ADD_MESSAGE:{
			let text = state.newMessageText;
			stateCopy = {
				...state,
				newMessageText: '',
				messagesData: [...state.messagesData, {id:6, message: text, img:`${profileImg}`}]
			}
			return stateCopy;
		}

		case UPDATE_NEW_MESSAGE_TEXT: {
			stateCopy = {
				...state,
				newMessageText: action.newText
			}
			return stateCopy;
		}
			
		default:
			return state;
	}

}

export const onAddMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (text) => 
	({type: UPDATE_NEW_MESSAGE_TEXT,newText: text})

export default messagesReducer;
