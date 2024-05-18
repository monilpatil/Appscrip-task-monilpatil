import React, { useState } from 'react';

const Navigation = () => {
  const [activeTab, setActiveTab] = useState('SHOP');

  const renderContent = () => {
    switch (activeTab) {
      case 'SHOP':
        return <div></div>;
      case 'SKILLS':
        return <div>Skills content goes here.</div>;
      case 'STORIES':
        return <div>Stories content goes here.</div>;
      case 'ABOUT':
        return <div>About content goes here.</div>;
      case 'CONTACT':
        return <div>Contact content goes here.</div>;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <header className="flex flex-wrap justify-around items-center py-4">
        <nav className="flex space-x-4 sm:space-x-8">
          {['SHOP', 'SKILLS', 'STORIES', 'ABOUT', 'CONTACT'].map((tab) => (
            <button
              key={tab}
              className={`text-sm sm:text-lg font-semibold ${
                activeTab === tab ? 'text-black' : 'text-gray-500'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </nav>
      </header>
      <main className="mt-4 text-black">
        {renderContent()}
      </main>
    </div>
  );
};

export default Navigation;
