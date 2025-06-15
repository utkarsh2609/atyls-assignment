import { useEffect, useState } from "react";
import AppWrapper from "../UI/AppWrapper/AppWrapper";
import FeedCard from "../UI/FeedCard/FeedCard";
import { apiCall } from "../utils/utilities";
import type { IFeedItem } from "../interface/IFeedItem";
import PostEditor from "../UI/PostEditor/PostEditor";
import AuthForm from "../UI/AuthForm/AuthForm";
import Modal from "../UI/Modal/Modal";
import Alert from "../UI/Alert/Alert";
import { useAuth } from "../context/AuthContext";

const Feed = () => {
    const [feed, setFeed] = useState<IFeedItem[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const { isAuthenticated } = useAuth();

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
            <div className="flex flex-col items-center justify-center">
                <div className="w-full max-w-lg">
                    <PostEditor />

                    {/* <button
                    className="px-4 py-2 bg-indigo-600 text-white rounded"
                    onClick={() => setIsOpen(true)}
                >
                    Open Auth Modal
                </button>
                <Modal isOpen={isOpen} onClose={() => {}}>
                    <AuthForm />
                </Modal> */}
                    <div className="overflow-y-auto mt-4">
                        {
                            feed.length === 0 ? (
                                <div className="text-center text-gray-500">Loading feed...</div>
                            ) : (
                                feed.map(
                                    (item) => (<FeedCard key={item.id} post={item} onInteract={setIsOpen}/>)
                                )
                            )
                        }
                    </div>

                </div>
                <Modal isOpen={isOpen} onClose={() => { setIsOpen(false) }}>
                    {
                        !isAuthenticated ? <AuthForm onClose={() => setIsOpen(false)}/> : <Alert onClose={() => setIsOpen(false)} />
                    }
                    
                </Modal>

            </div>
        </AppWrapper>
    );
}
export default Feed;
