import LoginIcon from '../../assets/images/login.svg';
import MouseIcon from '../../assets/images/mouse.svg';

const Header = () => {
  return (
    <header className="w-full text-gray-800 p-2 flex items-center justify-between bg-white shadow-md fixed">
      <div className="flex gap-2 items-center">
        <img src={MouseIcon} alt="" className="w-5 h-5 text-gray-700" />
        <h3 className="text-base font-semibold">foo-rum</h3>
      </div>
      <nav>
        <div className="flex items-center gap-2.5 font-medium p-1">
          Login
          <img src={LoginIcon} alt="" className="w-5 h-5 text-gray-700" />
        </div>
      </nav>
    </header>
  );
}
export default Header;