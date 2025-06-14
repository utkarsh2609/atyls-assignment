const Post: React.FC<any> = () => {
    console.log('Post component rendered');

    return (
        <div className="bg-gray-100 rounded-2xl p-2 mb-4">
            <div className="max-w-lg mx-auto bg-white rounded-2xl shadow p-3.5 border border-gray-200">
                editor
            </div>
        </div>
    );
}
export default Post;