import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';

const  App = () =>  {
	return (
		<div className='app_wrapper'>
			<div className='app_header_content'>
				<Header/>
			</div>
			<div className='app_layout'>
				<div className='side_bar'>
					<SideBar/>
				</div>
				<div className="app_content">
					<Content/>
				</div>
			</div>
		</div>
	);
}

export default App;
