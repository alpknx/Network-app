import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '60e784c7-da58-4a70-a971-6c75a1b6ddc5',
  },
});

export const authAPI = {
  getAuth() {
    return instance.get('auth/me');
  },
  postLogin(email, password, rememberMe = false) {
    return instance.post('auth/login', { email, password, rememberMe });
  },
  deleteLogin() {
    return instance.delete('auth/login');
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`).then((response) => response.data);
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`).then((response) => response.data);
  },
  updateStatus(status) {
    return instance.put('profile/status', { status }).then((response) => response.data);
  },
  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append('image', photoFile);

    return instance.put('profile/photo', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  saveProfile(profile) {
    return instance.put('profile', profile);
  },
};

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`);
  },
  postFollow(userId) {
    return instance.post(`/follow/${userId}`, {}).then((response) => response.data);
  },
  deleteFollow(userId) {
    return instance.delete(`/follow/${userId}`).then((response) => response.data);
  },
};

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get('security/get-captcha-url');
  },
};

export const sidebarApi = {
  getFriends(currentPage = 1, pageSize = 6) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then((response) => response.data);
  },
  getFriendProfile(friendId) {
    return instance.get(`profile/${friendId}`).then((response) => response.data);
  },
};
