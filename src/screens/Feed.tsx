import { useEffect, useState, useRef, useCallback } from "react";
import AppWrapper from "../UI/AppWrapper/AppWrapper";
import FeedCard from "../UI/FeedCard/FeedCard";
import { apiCall } from "../utils/utilities";
import type { IFeedItem } from "../interface/IFeedItem";
import PostEditor from "../UI/PostEditor/PostEditor";
import AuthForm from "../UI/AuthForm/AuthForm";
import Modal from "../UI/Modal/Modal";
import Alert from "../UI/Alert/Alert";
import { useAuth } from "../context/AuthContext";

const LIMIT = 10;

const Feed = () => {
    const [feed, setFeed] = useState<IFeedItem[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const { isAuthenticated } = useAuth();
    const loader = useRef<HTMLDivElement | null>(null);

    const fetchFeed = useCallback(async (pageNum: number) => {
        setLoading(true);
        const response = await apiCall('GET', `posts?_page=${pageNum}&_limit=${LIMIT}`);
        if (response && response.length > 0) {
            setFeed(prev => [...prev, ...response]);
            if (response.length < LIMIT) setHasMore(false);
        } else {
            setHasMore(false);
        }
        setLoading(false);
    }, []);

    useEffect(() => {
        fetchFeed(page);
    }, [fetchFeed, page]);

    // Infinite scroll observer
    useEffect(() => {
        if (!hasMore || loading) return;
        const observer = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting) {
                    setPage(prev => prev + 1);
                }
            },
            { threshold: 1 }
        );
        if (loader.current) observer.observe(loader.current);
        return () => {
            if (loader.current) observer.unobserve(loader.current);
        };
    }, [hasMore, loading]);

    const createPost = async (postData: IFeedItem) => {
        try {
            const response = await apiCall('POST', 'posts', { content: postData });
            if (response) {
                setFeed(prev => [response.content, ...prev]);
            }
        } catch (error) {
            console.error("Error creating post:", error);
            return;
            
        }
    };

    return (
        <AppWrapper>
            <div className="flex flex-col items-center justify-center">
                <div className="w-full max-w-lg">
                    <PostEditor onSendPost={createPost} />
                    <div className="overflow-y-auto mt-4">
                        {feed.length === 0 && !loading ? (
                            <div className="text-center text-gray-500">Loading feed...</div>
                        ) : (
                            feed.map(item => (
                                <FeedCard key={item.id} post={item} onInteract={setIsOpen} />
                            ))
                        )}
                        {feed.length >= LIMIT && <div ref={loader} />}
                        {loading && <div className="text-center text-gray-400 py-4">Loading more...</div>}
                        {!hasMore && feed.length > 0 && (
                            <div className="text-center text-gray-400 py-4">No more posts</div>
                        )}
                    </div>
                </div>
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    {!isAuthenticated ? (
                        <AuthForm onClose={() => setIsOpen(false)} />
                    ) : (
                        <Alert onClose={() => setIsOpen(false)} />
                    )}
                </Modal>
            </div>
        </AppWrapper>
    );
};
export default Feed;
