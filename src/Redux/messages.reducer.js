import profileImg from '../components/assets/img/profile-img.png';

const SEND_MESSAGE = 'SEND_MESSAGE';

const initialState = {
  dialogsData: [
    { id: 1, name: 'Alexander', img: `${profileImg}` },
    { id: 2, name: 'Sergey', img: `${profileImg}` },
    { id: 3, name: 'Sveta', img: `${profileImg}` },
    { id: 4, name: 'Julia', img: `${profileImg}` },
    { id: 5, name: 'Stepan', img: `${profileImg}` },
  ],

  messagesData: [
    { id: 1, message: 'Hello', img: `${profileImg}` },
    { id: 2, message: 'Check this linnk', img: `${profileImg}` },
    { id: 3, message: 'Once upon a time', img: `${profileImg}` },
    { id: 4, message: 'I missed about you', img: `${profileImg}` },
    { id: 5, message: 'Once upon a time', img: `${profileImg}` },
  ],
};

const messagesReducer = (action, state = initialState) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      const body = action.newMessageBody;
      return {
        ...state,
        messagesData: [...state.messagesData, { id: 6, message: body, img: `${profileImg}` }],
      };
    }
    default:
      return state;
  }
};
export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });

export default messagesReducer;
