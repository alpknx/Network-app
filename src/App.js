import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Users from './../src/components/Users/Users';
import News from './../src/components/News/News';
import Music from './../src/components/Music/Music';
import Settings from './../src/components/Settings/Settings';

const  App = (props) =>  {
	return (
		<BrowserRouter>
			<div className='app_wrapper'>
				<div className='app_layout'>
					<div className='app_header_content'>
						<Header/>
					</div>
					<div className='side_bar'>
						<SideBar/>
					</div>
					<div className="app_content">
						<Routes>
							<Route path="/profile" element={<Profile postsData={props.postsData}/>} />
							<Route path="/dialogs/*" 
									element={<Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData}/>} />
							<Route path="/users" element={<Users/>} />
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
