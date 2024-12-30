import React, { useState } from 'react';

const Footer = () => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 1000); // Reset animation after 1 second
    };

    // Prevent right-click (download) and drag on images
    const preventDownload = (e) => {
        e.preventDefault();
    };

    return (
        <footer className="fixed bottom-0 flex flex-row justify-between items-center w-full border-t-2 border-gradient-to-r from-purple-500 via-pink-500 to-red-500 px-4 py-2 shadow-lg z-50"  style={{ backgroundColor: 'rgb(245, 245, 245)' }}>
            <div>
                <img
                    className="w-5"
                    src="/nest1.png"
                    alt="Navigation"
                    onContextMenu={preventDownload} // Disable right-click
                    draggable="false" // Prevent drag
                />
            </div>
            <div>
                <img
                    className="w-5"
                    src="/bell.png"
                    alt="Notification"
                    onContextMenu={preventDownload} // Disable right-click
                    draggable="false" // Prevent drag
                />
            </div>
            <div
                className="flex justify-center items-center py-1 px-4 rounded-lg bg-pink-600 relative"
                onClick={handleClick} // Trigger animation on click
            >
                {/* Animated psos.png */}
                <img
                    className={`w-5 relative z-10 ${isClicked ? 'animate-click-effect' : 'animate-bounce-scale'}`}
                    src="/psos.png"
                    alt="Flow"
                    onContextMenu={preventDownload} // Disable right-click
                    draggable="false" // Prevent drag
                />
                {/* Glowing effect */}
                <div className="absolute inset-0 rounded-full bg-pink-400 opacity-50 blur-lg animate-pulse"></div>
            </div>
            <div>
                <img
                    className="w-5"
                    src="/comment(1).png"
                    alt="Comment"
                    onContextMenu={preventDownload} // Disable right-click
                    draggable="false" // Prevent drag
                />
            </div>
            <div>
                <img
                    className="w-5"
                    src="/ouser.png"
                    alt="User"
                    onContextMenu={preventDownload} // Disable right-click
                    draggable="false" // Prevent drag
                />
            </div>
        </footer>
    );
};

export default Footer;
