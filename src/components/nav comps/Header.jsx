import React, { useState } from 'react';

const Header = () => {
    const [active, setActive] = useState("Explore");

    const handleNavClick = (item) => {
        setActive(item);
    };

    return (
        <header className="fixed top-0 flex flex-row justify-between items-center w-full bg-white border-b-2 border-gradient-to-r from-purple-500 via-pink-500 to-red-500 px-4 py-2 shadow-lg z-50">
            <div>
                <img className="w-10" src="/bitmap.png" alt="Logo" />
            </div>
            <div className="flex space-x-6">
                <div>
                    <p
                        onClick={() => handleNavClick("Explore")}
                        className={`text-gray-800 cursor-pointer transition-transform duration-300 ${active === "Explore" ? "scale-110 text-pink-600 font-semibold" : ""
                            }`}
                    >
                        Explore
                    </p>
                </div>
                <div>
                    <p
                        onClick={() => handleNavClick("Following")}
                        className={`text-gray-800 cursor-pointer transition-transform duration-300 ${active === "Following" ? "scale-110 text-pink-600 font-semibold" : ""
                            }`}
                    >
                        Following
                    </p>
                </div>
            </div>
            <div>
                <img className="w-6" src="/sruy.png" alt="Search" />
            </div>
        </header>
    );
};

export default Header;