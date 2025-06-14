import {  useLocation, useNavigate } from 'react-router';
import LoginIcon from '../../assets/images/login.svg';
import MouseIcon from '../../assets/images/mouse.svg';
import { useEffect, useState } from 'react';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggededIn] = useState(false);
  const [isAuthScreen, setIisAuthScreen] = useState(false);

  useEffect(() => {
    setIisAuthScreen(location.pathname == '/signin');
  }, [location]);

  const handleLoginClick = () => {
    if (isAuthScreen) {
      // Handle sign out logic here
      // setIsLoggededIn(false);
      navigate('/');
    } else {
      // Navigate to sign-in page
      navigate('/signin');
    }
  };

  return (
    <header className="w-full text-gray-800 p-2 flex items-center justify-between bg-white shadow-md fixed">
      <div className="flex gap-2 items-center cursor-pointer" onClick={() => navigate('/')}>
        <img src={MouseIcon} alt="" className="w-5 h-5 text-gray-700" />
        <h3 className="text-base font-semibold">foo-rum</h3>
      </div>
      <nav>
          <div className="flex items-center gap-2.5 font-medium p-1 cursor-pointer" onClick={handleLoginClick}>
            {
              isAuthScreen? (
                <> Back to home </>
              ) : (
                <> Login <img src={LoginIcon} alt="" className="w-5 h-5 text-gray-700" /> </>
              )
            }
          </div>
      </nav>
    </header>
  );
}
export default Header;