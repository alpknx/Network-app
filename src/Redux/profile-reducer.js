import profileImg from './../components/assets/img/profile-img.png';
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
	postsData: [
		{id: 1, message: 'Hi, How are you?', likes: 20, img:`${profileImg}`},
		{id: 2, message: 'It is my first Post', likes: 11, img:`${profileImg}`},
		{id: 3, message: 'Second', likes: 10, img:`${profileImg}`},
		],
		newPostText: ''
}

const profileReducer = (state = initialState , action) => {
	let stateCopy;
	switch (action.type) {
		case ADD_POST: {
			stateCopy = {
				...state,
				postsData: [...state.postsData, {id: 4, message:state.newPostText, likes: 10, img:`${profileImg}`}]
			}	
			return stateCopy;
		}
		case UPDATE_NEW_POST_TEXT: {
			stateCopy = {
				...state,
				newPostText: action.newText
			}
			return stateCopy;
		}

		default:
			return state;
	}
	
}

export const onAddPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => 
	({type: UPDATE_NEW_POST_TEXT,newText: text});

export default profileReducer;
