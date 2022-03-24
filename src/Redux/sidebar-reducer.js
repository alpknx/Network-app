import profileImg from './../components/assets/img/profile-img.png';

let initialState = {
	friends: [
		{id: 1, name: "Julia", img: `${profileImg}` },
		{id: 2, name: "Stepan", img: `${profileImg}` },
		{id: 3, name: "Ivan", img: `${profileImg}` }
	]
}

const sidebarReducer = (state = initialState , action) => {
	return state;
}

export default sidebarReducer;
