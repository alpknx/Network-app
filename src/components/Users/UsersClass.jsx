import * as  axios from 'axios';
import User from './User/User';
import cl from './Users.module.css';
import React from 'react';

class  UsersClass extends React.Component{

	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.setUsers(response.data.items);
				//this.props.setTotalUsersCount(response.data.totalCount);
			});
		
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.setUsers(response.data.items);
			});
	}

	render() {

		let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize) ;
		let pages = [];
		for (let i = 1; i <= pagesCount; i++) {
			pages.push(i);
		}

		return (
			<div className={cl.users}>
				<div className={cl.pages_numbers}>
				{ pages.map( page => {
					return <div className={this.props.currentPage === page && cl.selected}
					onClick={(e) => { this.onPageChanged(page) }}><div className={cl.page_number}>{page}</div></div>
				})}
				</div>
				<User users={this.props.users} follow={this.props.follow} unfollow={this.props.unfollow}/>
			</div>
		);

	}	
}

export default UsersClass;
