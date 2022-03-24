import * as axios from "axios";

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers:     {
		"API-KEY": "9a0f3d9d-fe27-4798-8b85-b98b22fa7cb0"
	}
});

export const authAPI = {
	getAuth() {
		return instance.get(`auth/me`)
		.then(response => {
			return response.data;
		});
	}
}

export const profileAPI = {
	getProfile(userId) {
		return instance.get(`profile/${userId}`)
		.then(response => {
			return response.data;
		});
	},
	getStatus(userId) {
		return instance.get(`profile/status/` + userId)
		.then(response => {
			return response.data;
		});
	},
	updateStatus(status) {
		return instance.put(`profile/status`, { status: status })
		.then(response => {
			return response.data;
		});
	}
}

export const usersAPI = {
	getUsers(currentPage = 1, pageSize = 10) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => {
					return response.data;
			});
	},
	postFollow(userId) {
		return instance.post(`/follow/${userId}`, {})
		.then(response => {
			return response.data;
		});
	},
	deleteFollow(userId) {
		return instance.delete(`/follow/${userId}`)
		.then(response => {
			return response.data;
		});
	}
	
}

export const sidebarApi = {
	getFriends(currentPage = 1, pageSize = 6){
	return instance.get(`users?page=${currentPage}&count=${pageSize}`)
		.then(response => {
			return response.data;
		});
	},
	getFriendProfile(friendId) {
		return instance.get(`profile/${friendId}`)
		.then(response => {
			return response.data;
		});
	}
}
