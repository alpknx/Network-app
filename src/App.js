import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './../src/components/News/News';
import Music from './../src/components/Music/Music';
import Settings from './../src/components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import SidebarContainer from './components/SideBar/SideBarContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

const  App = (props) =>  {
	return (
		<BrowserRouter>
			<div className='app_wrapper'>
				<div className='app_layout'>
					<div className='app_header_content'>
						<Header/>
					</div>
					<div className='side_bar'>
						<SidebarContainer/>
					</div>
					<div className="app_content">
						<Routes>
							<Route path="/profile/*" 
									element={<ProfileContainer/>} />
							<Route path="/dialogs/*" 
									element={<DialogsContainer/>}/>
							<Route path="/users" element={<UsersContainer/>} />
							<Route path="/news" element={<News/>} />
							<Route path="/music" element={<Music/>} />
							<Route path="/settings" element={<Settings/>} />
						</Routes>
					</div>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
