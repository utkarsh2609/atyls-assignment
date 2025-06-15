import {  useLocation, useNavigate } from 'react-router';
import LoginIcon from '../../assets/images/login.svg';
import MouseIcon from '../../assets/images/mouse.svg';
import { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isAuthScreen, setIisAuthScreen] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();

  useEffect(() => {
    setIisAuthScreen(location.pathname == '/signin');
  }, [location]);

  const handleAuthButton = () => {
    if (isAuthenticated) {
      if(isAuthScreen) {
        return (<div onClick={() => navigate('/')}> Back to home {user?.email} </div>)
      } else {
        return (<div onClick={() => logout()}> Log out </div>);
      }
    } else {
      if(isAuthScreen) {
        return (<div onClick={() => navigate('/')}> Back to home </div>);
      }
      return (<div className='flex items-center gap-2.5' onClick={() => navigate('/signin')}> Login <img src={LoginIcon} alt="" className="w-5 h-5 text-gray-700" /> </div>);
    }
  };


  return (
    <header className="w-full text-gray-800 p-2 flex items-center justify-between bg-white shadow-md fixed z-10">
      <div className="flex gap-2 items-center cursor-pointer" onClick={() => navigate('/')}>
        <img src={MouseIcon} alt="" className="w-5 h-5 text-gray-700" />
        <h3 className="text-base font-semibold">foo-rum</h3>
      </div>
      <nav>
          <div className="flex items-center gap-2.5 font-medium p-1 cursor-pointer">
            {handleAuthButton()}
          </div>
      </nav>
    </header>
  );
}
export default Header;