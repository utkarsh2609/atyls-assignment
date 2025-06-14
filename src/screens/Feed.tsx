import { useEffect, useState } from "react";
import AppWrapper from "../UI/AppWrapper/AppWrapper";
import FeedCard from "../UI/FeedCard/FeedCard";
import { apiCall } from "../utils/utilities";
import type { IFeedItem } from "../interface/IFeedItem";
import PostEditor from "../UI/Post/Post";

const Feed = () => {
    const [feed, setFeed] = useState<IFeedItem[]>([]);

    useEffect(() => {
        console.log('Feed component mounted');
        fetchFeed();
    }, []);

    const fetchFeed = async () => {
        const response = await apiCall('GET', 'posts?_page=1&_per_page=25');
        console.log(response);
        setFeed(response);
        console.log('feed', feed);
    }

    return (
        <AppWrapper>
            <div className="flex flex-col items-center justify-center h-screen">
            <PostEditor />
                {/* {
                    feed.length === 0 ? (
                        <div className="text-center text-gray-500">Loading feed...</div>
                    ) : (
                        feed.map(
                            (item) => ( <FeedCard key={item.id} post={item} /> )
                        )
                    )
                } */}
            </div>
        </AppWrapper>
    );
}
export default Feed;
