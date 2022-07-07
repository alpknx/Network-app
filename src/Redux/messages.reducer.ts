import profileImg from '../components/assets/img/profile-img.png';

const SEND_MESSAGE = 'SEND_MESSAGE';

type DialogType = {
  id: number;
  name: string;
  img: string;
};
type MessageType = {
  id: number;
  message: string;
  img: string;
};

const initialState = {
  dialogsData: [
    { id: 1, name: 'Alexander', img: `${profileImg}` },
    { id: 2, name: 'Sergey', img: `${profileImg}` },
    { id: 3, name: 'Sveta', img: `${profileImg}` },
    { id: 4, name: 'Julia', img: `${profileImg}` },
    { id: 5, name: 'Stepan', img: `${profileImg}` },
  ] as Array<DialogType>,

  messagesData: [
    { id: 1, message: 'Hello', img: `${profileImg}` },
    { id: 2, message: 'Check this linnk', img: `${profileImg}` },
    { id: 3, message: 'Once upon a time', img: `${profileImg}` },
    { id: 4, message: 'I missed about you', img: `${profileImg}` },
    { id: 5, message: 'Once upon a time', img: `${profileImg}` },
  ] as Array<MessageType>,
};

export type InitialStateType = typeof initialState;

const messagesReducer = (state = initialState, action: any): InitialStateType => {
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

type SendMessageCreatorActionType = {
  type: typeof SEND_MESSAGE;
  newMessageBody: string;
};

export const sendMessageCreator = (newMessageBody: string): SendMessageCreatorActionType => ({
  type: SEND_MESSAGE,
  newMessageBody,
});

export default messagesReducer;
