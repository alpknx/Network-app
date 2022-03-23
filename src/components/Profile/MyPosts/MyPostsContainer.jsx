import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
	return (
		<StoreContext.Consumer>
			{(reduxStore) => {
				let state = reduxStore.getState();
				return(
					<MyPosts postsData={state.profilePage.postsData}/>)
			}
		}
		</StoreContext.Consumer>
	);
}

export default MyPostsContainer;
