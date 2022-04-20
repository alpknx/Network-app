import profileImg from '../assets/img/profile-img.png';
import User from './User/User';
import cl from './Users.module.css';

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
				location: {city:"Moscow", country: "Russia"}
			}
		])
	}
	return (
		<div className={cl.users}>
			<User users={props.users} follow={props.follow} unfollow={props.unfollow}/>
		</div>
	);
}

export default Users;
