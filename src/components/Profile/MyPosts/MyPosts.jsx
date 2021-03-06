import React from 'react';
import cl from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = React.memo((props) => {
  let postElements = [...props.postsData]
    .reverse()
    .map((postItem) => <Post img={postItem.img} message={postItem.message} likes={postItem.likes} key={postItem.id} />);

  return (
    <div className={cl.posts_list}>
      <h1> My Posts </h1>
      {postElements}
    </div>
  );
});

export default MyPosts;
