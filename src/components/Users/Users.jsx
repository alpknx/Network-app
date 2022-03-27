import User from './User/User';
import cl from './Users.module.css';

const Users = (props) => {

	let pagesCount = Math.ceil(props.totalUsersCount /props.pageSize) ;
		let pages = [];
		for (let i = 1; i <= pagesCount; i++) {
			pages.push(i);
		}

	return (
		<div className={cl.users}>
				<div className={cl.pages_numbers}>
				{ pages.map( page => {
					return <div className={props.currentPage === page && cl.selected}
					onClick={(e) => { props.onPageChanged(page) }}>
						<div className={cl.page_number}>
							{page}
						</div>
							</div>
				})}
				</div>
				<User users={props.users} follow={props.follow} unfollow={props.unfollow}
				toggleFollowingProgress={props.toggleFollowingProgress}
				followingInProgress={props.followingInProgress}/>
			</div>
	);
}

export default Users;
