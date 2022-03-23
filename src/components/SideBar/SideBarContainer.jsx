import SideBar from './SideBar';
import { connect } from 'react-redux';

let mapStateToProps =(state) => {
	return {
		friends: state.sidebar.friends
	}
}

const SidebarContainer = connect(mapStateToProps, null) (SideBar) 

export default SidebarContainer;
