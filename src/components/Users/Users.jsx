import Paginator from './Paginator';
import User from './User/User';
import cl from './Users.module.css'

const Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {
	return (
		<div className={cl.users}>
				<Paginator currentPage={currentPage} onPageChanged={onPageChanged}
						totalItemsCount={totalUsersCount} pageSize={pageSize}/>
				<User users={users} follow={props.follow} unfollow={props.unfollow}
				toggleFollowingProgress={props.toggleFollowingProgress}
				followingInProgress={props.followingInProgress}/>
			</div>
	);
}

export default Users;
