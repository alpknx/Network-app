import './App.css';

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

const Header = () => {
	return (
		<div className='app_header_wrapper'>
			Header
		</div>
	)
}

const SideBar = () => {
	return (
		<div className='side_bar_inner'>
			Sidebar
		</div>
	)
}

const Content = () => {
	return (
		<div className='app_content_inner'>
			Content
		</div>
	)
}

export default App;
