import HeartIcon from '../../assets/images/heart.svg';
import CommentIcon from '../../assets/images/comment-text.svg';
import ShareIcon from '../../assets/images/share.svg';

const FeedCard = () => {
  return (
    <div className="bg-gray-100 rounded-2xl p-2">
        <div className="max-w-lg mx-auto bg-white rounded-2xl shadow p-3.5 border border-gray-200">
          <div className="flex items-center mb-2">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Theresa Webb"
              className="w-10 h-10 rounded-lg mr-3 object-cover"
            />
            <div>
              <div className="font-semibold text-gray-900 text-base leading-tight">Theresa Webb</div>
              <div className="text-xs text-gray-400">5 mins ago</div>
            </div>
          </div>
          <div className="flex items-start mb-3">
            <img src={HeartIcon} alt="Heart" className="w-7 h-7 mr-3 mt-1" />
            <p className="text-gray-800 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="flex items-center gap-6 pt-1">
            <img src={HeartIcon} alt="Heart" />
            <img src={CommentIcon} alt="Comment" />
            <img src={ShareIcon} alt="Share" />
          </div>
        </div>
    </div>
  );
}
export default FeedCard;