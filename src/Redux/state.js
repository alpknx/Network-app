/* eslint-disable no-underscore-dangle */
import profileImg from '../components/assets/img/profile-img.png';
import messagesReducer from './messages.reducer';
import profileReducer from './profile.reducer';

const store = {
  _state: {
    profilePage: {
      postsData: [
        {
          id: 1,
          message: 'Hi, How are you?',
          likes: 20,
          img: `${profileImg}`,
        },
        {
          id: 2,
          message: 'It is my first Post',
          likes: 11,
          img: `${profileImg}`,
        },
        {
          id: 3,
          message: 'Second',
          likes: 10,
          img: `${profileImg}`,
        },
      ],
      newPostText: '',
    },

    messagesPage: {
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
      newMessageText: '',
    },

    sidebar: {
      friends: [
        { id: 1, name: 'Julia', img: `${profileImg}` },
        { id: 2, name: 'Stepan', img: `${profileImg}` },
        { id: 3, name: 'Ivan', img: `${profileImg}` },
      ],
    },
  },

  _callSubscriber() {
    // eslint-disable-next-line no-console
    console.log('state changed');
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer; // observer button.addEventListener
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
    this._callSubscriber(this._state);
  },
};

export default store;
