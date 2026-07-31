const PostPage = async ({
    params,
}: {
    params: Promise<{
        username: string;
        postId: string;
    }>;
}) => {
    const { username, postId } = await params;

    return (
        <div>
            <h1>Post</h1>
            <p>Developer: {username}</p>
            <p>Post ID: {postId}</p>
        </div>
    );
};

export default PostPage;