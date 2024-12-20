import React, { useState } from 'react';

const Post = ({ post }) => {
    const [emojiReactions, setEmojiReactions] = useState({
        love: 51,
        twito: 5,
        star: 0,
    });
    const [selectedEmoji, setSelectedEmoji] = useState(null);
    const [expanded, setExpanded] = useState(false);

    const handleEmojiClick = (emoji) => {
        setEmojiReactions((prev) => {
            const newReactions = { ...prev };
            if (selectedEmoji) {
                newReactions[selectedEmoji] = Math.max(newReactions[selectedEmoji] - 1, 0);
            }
            newReactions[emoji] += 1;
            return newReactions;
        });
        setSelectedEmoji(emoji);
    };

    const handleReadMore = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="border rounded-lg shadow-lg p-4 mb-6">
            <div className="flex items-center mb-4 relative">
                <img className="w-12 h-12 rounded-full object-cover mr-4" src={post.user.profilePicture} alt="User Profile" />
                <div className="flex flex-col">
                    <h5 className="font-semibold text-[15px] text-black">@{post.user.username}</h5>
                    <p className="text-[15px] text-black">{post.time}</p>
                </div>
                <div className="absolute right-0 top-0 flex items-center justify-center w-6 h-6">
                    <span className="text-black">•••</span>
                </div>
            </div>
            <div className="mb-4">
                {post.mediaType === 'video' ? (
                    <video className="w-full rounded-lg object-cover" controls>
                        <source src={post.media} type="video/mp4" />
                        <source src={post.media.replace('.mp4', '.webm')} type="video/webm" />
                        <source src={post.media.replace('.mp4', '.ogg')} type="video/ogg" />
                    </video>
                ) : (
                    <img
                        className="w-full rounded-lg object-cover"
                        src={post.media}
                        alt="Post"
                    />
                )}
            </div>

            <div className="mb-4">
                <p className="text-[15px] text-black">
                    {expanded ? post.content : `${post.content.substring(0, 100)}...`}
                    <button
                        className="text-black ml-2"
                        onClick={handleReadMore}
                    >
                        {expanded ? 'Show Less' : 'Read More'}
                    </button>
                </p>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex space-x-8">
                    {/* Love Emoji */}
                    <div
                        className={`flex items-center space-x-1 cursor-pointer transform transition-transform duration-200 ${selectedEmoji === 'love' ? 'scale-125' : ''}`}
                        onClick={() => handleEmojiClick('love')}
                    >
                        <img
                            className="w-4 h-4"
                            src={
                                selectedEmoji === 'love'
                                    ? `${process.env.PUBLIC_URL}/filled heart.png`
                                    : `${process.env.PUBLIC_URL}/heart.png`
                            }
                            alt="Love Icon"
                        />
                        <span>{emojiReactions.love}</span>
                    </div>

                    {/* Twito Emoji */}
                    <div
                        className={`flex items-center space-x-1 cursor-pointer transform transition-transform duration-200 ${selectedEmoji === 'twito' ? 'scale-125' : ''}`}
                        onClick={() => handleEmojiClick('twito')}
                    >
                        <img
                            className="w-4 h-4"
                            src={`${process.env.PUBLIC_URL}/twito.png`}
                            alt="Twito Icon"
                        />
                        <span>{emojiReactions.twito}</span>
                    </div>

                    {/* Star Emoji */}
                    <div
                        className={`flex items-center space-x-1 cursor-pointer transform transition-transform duration-200 ${selectedEmoji === 'star' ? 'scale-125' : ''}`}
                        onClick={() => handleEmojiClick('star')}
                    >
                        <img
                            className="w-4 h-4"
                            src={`${process.env.PUBLIC_URL}/wishlist.png`}
                            alt="Star Icon"
                        />
                        <span>{emojiReactions.star}</span>
                    </div>
                </div>
                <div className="text-black cursor-pointer flex items-center text-[10px]">
                    <p>View {post.replies} replies</p>
                    <img className="ml-2 w-4 h-4" src="/right.png" alt="Right Arrow" />
                </div>
            </div>
        </div>
    );
};

export default Post;
