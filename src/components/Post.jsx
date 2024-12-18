import React, { useState } from 'react';

const Post = ({ post }) => {
    const [emojiReactions, setEmojiReactions] = useState({
        love: 0,
        twito: 0,
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
        <div className="timeline-post border rounded-lg shadow-lg p-4 mb-6">
            <div className="post-header flex items-center mb-4">
                <img className="profile-picture w-12 h-12 rounded-full mr-4" src={post.user.profilePicture} alt="User Profile" />
                <div className="user-info">
                    <h5 className="username font-bold text-lg">{post.user.username}</h5>
                    <p className="time text-sm text-gray-500">{post.time}</p>
                </div>
            </div>
            <div className="post-images mb-4">
                {post.mediaType === 'video' ? (
                    <video className="post-video w-full rounded-lg object-cover" controls>
                        <source src={post.media} type="video/mp4" />
                        <source src={post.media.replace('.mp4', '.webm')} type="video/webm" />
                        <source src={post.media.replace('.mp4', '.ogg')} type="video/ogg" />
                    </video>
                ) : (
                    <img
                        className="post-image w-full rounded-lg object-cover"
                        src={post.media}
                        alt="Post"
                    />
                )}
            </div>

            <div className="post-content mb-4">
                <p className="post text-gray-700">
                    {expanded ? post.content : `${post.content.substring(0, 100)}...`}
                    <button
                        className="read-more text-blue-500 underline ml-2"
                        onClick={handleReadMore}
                    >
                        {expanded ? 'Show Less' : 'Read More'}
                    </button>
                </p>
            </div>
            <div className="reaction flex items-center justify-between">
                <div className="emoji-reactions flex space-x-6">
                    {/* Love Emoji */}
                    <div
                        className={`emoji flex items-center space-x-1 cursor-pointer transform transition-transform duration-200 ${selectedEmoji === 'love' ? 'scale-125' : ''
                            }`}
                        onClick={() => handleEmojiClick('love')}
                    >
                        <img
                            className="w-6 h-6"
                            src={
                                selectedEmoji === 'love'
                                    ? `${process.env.PUBLIC_URL}/filled heart.png` // Image when clicked
                                    : `${process.env.PUBLIC_URL}/heart.png` // Default image
                            }
                            alt="Love Icon"
                        />
                        <span>{emojiReactions.love}</span>
                    </div>

                    {/* Twito Emoji */}
                    <div
                        className={`emoji flex items-center space-x-1 cursor-pointer transform transition-transform duration-200 ${selectedEmoji === 'twitter' ? 'scale-125' : ''
                            }`}
                        onClick={() => handleEmojiClick('twito')}
                    >
                        <img
                            className={`w-6 h-6 ${selectedEmoji === 'twitter' ? 'opacity-100' : 'opacity-50'}`}
                            src={`${process.env.PUBLIC_URL}/twito.png`}
                            alt="Twito Icon"
                        />
                        <span>{emojiReactions.twito}</span>
                    </div>

                    {/* Star Emoji */}
                    <div
                        className={`emoji flex items-center space-x-1 cursor-pointer transform transition-transform duration-200 ${selectedEmoji === 'star' ? 'scale-125' : ''
                            }`}
                        onClick={() => handleEmojiClick('star')}
                    >
                        <img
                            className={`w-6 h-6 ${selectedEmoji === 'star' ? 'opacity-100' : 'opacity-50'}`}
                            src={`${process.env.PUBLIC_URL}/wishlist.png`}
                            alt="Star Icon"
                        />
                        <span>{emojiReactions.star}</span>
                    </div>
                </div>
                <div className="reply text-blue-500 cursor-pointer flex items-center">
                    <p>View {post.replies} replies</p>
                    <img className="ml-2 w-4 h-4" src="/right.png" alt="Right Arrow" />
                </div>
            </div>
        </div>
    );
};

export default Post;
