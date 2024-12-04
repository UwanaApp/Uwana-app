import React from 'react';

const Footer = () => {
    return (
        <footer className="fixed bottom-0 flex flex-row justify-between items-center w-full bg-white border-t-2 border-gradient-to-r from-purple-500 via-pink-500 to-red-500 px-4 py-2 shadow-lg z-50">
            <div>
                <img className="w-5" src="/nest1.png" alt="Navigation" />
            </div>
            <div>
                <img className="w-5" src="/bell.png" alt="Notification" />
            </div>
            <div className="flex justify-center items-center py-1 px-4 rounded-lg bg-pink-600">
                <img className="w-5" src="/psos.png" alt="Flow" />
            </div>
            <div>
                <img className="w-5" src="/comment(1).png" alt="Comment" />
            </div>
            <div>
                <img className="w-5" src="/ouser.png" alt="User" />
            </div>
        </footer>
    );
};

export default Footer;
