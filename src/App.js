import React, { Component, Suspense } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import SideBar from './components/SideBar/SideBar';
import { initializeApp } from './Redux/app.reducer';
import Preloader from './components/Preloader/Preloader';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));

class App extends Component {
  // eslint-disable-next-line class-methods-use-this, no-unused-vars
  catchAllUnhandledErrors = (reason, promise) => {
    // eslint-disable-next-line no-alert
    alert('Some error occured');
    // console.error(promiseRejectionEvent);
  };

  componentDidMount() {
    this.props.initializeApp();
  }

  componentWillUnmount() {
    window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors);
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <BrowserRouter>
        <div className='app_wrapper'>
          <div className='app_layout'>
            <div className='app_header_content'>
              <HeaderContainer />
            </div>
            <div className='side_bar'>
              <SideBar />
            </div>
            <div className='app_content'>
              <Suspense fallback={<Preloader />}>
                <Routes>
                  <Route path='/login/' element={<Login />} />
                  <Route path='/profile/*' element={<ProfileContainer />} />
                  <Route path='/dialogs/*' element={<DialogsContainer />} />
                  <Route path='/users' element={<UsersContainer />} />
                  <Route path='/news' element={<News />} />
                  <Route path='/music' element={<Music />} />
                  <Route path='/settings' element={<Settings />} />
                </Routes>
              </Suspense>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default compose(connect(mapStateToProps, { initializeApp }))(App);
