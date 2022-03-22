import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {

	let state = props.reduxStore.getState();

	return (
		<MyPosts postsData={state.profilePage.postsData}/>
	);
}

export default MyPostsContainer;
