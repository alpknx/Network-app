import profileImg from './../components/assets/img/profile-img.png';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


const messagesReducer = (state , action) => {
	switch (action.type) {
		case ADD_MESSAGE:
			let newMessage = {
				id: 4,
				message: state.newMessageText,
				likes: 10,
				img:`${profileImg}` 
			}
			state.messagesData.push(newMessage);
			state.newMessageText = '';
			return state;

		case UPDATE_NEW_MESSAGE_TEXT: 
			state.newMessageText = action.newText;
			return state;
			
		default:
			return state;
	}

}

export const onAddMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (text) => 
	({type: UPDATE_NEW_MESSAGE_TEXT,newText: text})

export default messagesReducer;
