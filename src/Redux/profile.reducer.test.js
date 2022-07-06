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

// test('message of new post should be correct', () => {
//   // 1. test data
//   const action = onAddPostAC('it-kamasutra.com');

//   // 2. action
//   const newState = profileReducer(state, action);

//   // 3. expectation
//   expect(newState.postsData[4].message).toBeValid('it-kamasutra.com');
// });

// test('after deleting length of messages should be decrement', () => {
//   // 1. test data
//   const action = deletePost(1);

//   // 2. action
//   const newState = profileReducer(state, action);

//   // 3. expectation
//   expect(newState.postsData.length).toEqual(3);
// });

// test("after deleting length shouldn't be decrement if id is incorrect", () => {
//   // 1. test data
//   const action = deletePost(1000);

//   // 2. action
//   const newState = profileReducer(state, action);

//   // 3. expectation
//   expect(newState.postsData.length).toEqual(4);
// });
