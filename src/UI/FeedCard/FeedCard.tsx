import HeartIcon from '../../assets/images/heart.svg';
import CommentIcon from '../../assets/images/comment-text.svg';
import ShareIcon from '../../assets/images/share.svg';
import type { IFeedItem } from '../../interface/IFeedItem';

type FeedCardProps = {
  key: number;
  post: IFeedItem;
}

const FeedCard: React.FC<FeedCardProps> = ({post}) => {
  console.log('feed card rendered', post);

  return (
    <div className="bg-gray-100 rounded-2xl p-2 mb-4">
        <div className="max-w-lg mx-auto bg-white rounded-2xl shadow p-3.5 border border-gray-200">
          <div className="flex items-center mb-2">
            <img
              src={`https://randomuser.me/api/portraits/women/${post.id}.jpg`}
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
            <p className="text-gray-800 text-sm"> {post.body} </p>
          </div>
        </div>
          <div className="flex items-center gap-6 pt-2.5 pb-1 ml-2.5">
            <img src={HeartIcon} alt="Heart" className='cursor-pointer' />
            <img src={CommentIcon} alt="Comment" className='cursor-pointer' />
            <img src={ShareIcon} alt="Share" className='cursor-pointer' />
          </div>
    </div>
  );
}
export default FeedCard;