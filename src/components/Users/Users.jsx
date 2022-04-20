import User from './User/User';
import cl from './Users.module.css'

const Users = (props) => {

	if (props.users.length === 0) {
		props.setUsers([
			{
				id: 2, 
				followed:true, 
				fullName: 'Ivan', 
				status: "Looking new opportunity ", 
				img:`${profileImg}`,
				location: {city:"Moscow", country: "Russia"}
			},
			{
				id: 3, 
				followed:true, 
				fullName: 'Pavel', 
				status: "Looking new opportunity ", 
				img:`${profileImg}`,
				location: {city:"Moscow", country: "Russia"},
			}
		])
	}
	return (
		<div className={cl.users}>
			{props.users.map(user => 
				<User user={user} follow={props.follow} unfollow={props.unfollow} key={user.id}/>
			)}
			
		</div>

	);
}

export default Users;
