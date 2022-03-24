import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './../src/components/News/News';
import Music from './../src/components/Music/Music';
import Settings from './../src/components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import SideBar from './components/SideBar/SideBar';

const  App = (props) =>  {
	return (
		<BrowserRouter>
			<div className='app_wrapper'>
				<div className='app_layout'>
					<div className='app_header_content'>
						<HeaderContainer/>
					</div>
					<div className='side_bar'>
						<SideBar/>
					</div>
					<div className="app_content">
						<Routes>
						<Route path="/login/" 
									element={<Login/>} />
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
