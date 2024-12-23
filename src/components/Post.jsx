import React from 'react';

const Post = ({ post }) => {
    return (
        <div className="rounded-lg shadow-md p-2 mb-2">
            <div className="flex items-center px-2">
                <img
                    className="w-12 h-12 rounded-full mr-2 object-cover"
                    src={post.user.profilePicture}
                    alt="User Profile"
                />
                <div className="flex flex-col">
                    <h5 className="mt-0 mb-1 text-sm font-semibold">@{post.user.username}</h5>
                    <p className="text-xs m-0">{post.time}</p>
                </div>
            </div>
            <div className="mt-2">
                {post.media && post.media.match(/\.(mp4|webm|ogg|mov|avi|mkv|flv)$/i) ? (
                    <video className="w-full rounded-lg" controls>
                        <source src={post.media} />
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <img className="w-full rounded-lg" src={post.media} alt="Post" />
                )}
            </div>
            <div className="px-2 text-sm mt-1">
                <p className="m-0">{post.content}</p>
            </div>
            <div className="flex justify-between pt-4 px-5">
                <div className="flex items-center gap-1">
                    <div className="flex">
                        <img className="w-5" src="/heart.png" alt="Heart" />
                    </div>
                    <div className="text-xs">
                        <p>{post.likes}</p>
                    </div>
                </div>
                <div className="flex items-center gap-1">
                    <div className="flex">
                        <img className="w-5" src="/twito.png" alt="Tweet" />
                    </div>
                    <div className="text-xs">
                        <p>{post.retweets}</p>
                    </div>
                </div>
                <div className="flex">
                    <img className="w-4" src="/wishlist.png" alt="Wishlist" />
                </div>
                <div className="flex items-center text-xs gap-1">
                    <div>
                        <p>View {post.replies} replies</p>
                    </div>
                    <div></div>
                    <img className="w-4" src="/right.png" alt="Right Arrow" />
                </div>
            </div>
        </div>
    );
};

export default Post;
