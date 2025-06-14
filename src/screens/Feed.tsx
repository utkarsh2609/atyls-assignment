import AppWrapper from "../UI/AppWrapper/AppWrapper";
import FeedCard from "../UI/FeedCard/FeedCard";

const Feed = () => {
    return (
        <AppWrapper>
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-2xl font-bold mb-4">Feed</h1>
                <p className="text-gray-600">This is the feed page.</p>
                <FeedCard />
            </div>
        </AppWrapper>
    );
}
export default Feed;
