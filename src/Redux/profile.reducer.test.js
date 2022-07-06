import profileReducer, { onAddPostAC } from './profile.reducer';

const state = {
  postsData: [
    { id: 1, message: 'Hi, how are you?', likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 11 },
    { id: 3, message: 'Blabla', likesCount: 11 },
    { id: 4, message: 'Dada', likesCount: 11 },
  ],
};

test('length of posts should be incremented', () => {
  // 1. test data
  const action = onAddPostAC('it-kamasutra.com');

  // 2. action
  const newState = profileReducer(action, state);

  // 3. expectation
  expect(newState.postsData.length).toEqual(5);
});
