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
    <div className="container mx-auto">
      <header className="flex justify-around items-center py-4">
        
        <nav className="flex space-x-8">
          {['SHOP', 'SKILLS', 'STORIES', 'ABOUT', 'CONTACT'].map((a) => (
            <button
              key={a}
              className={`text-lg font-semibold ${
                activeTab === a ? 'text-black' : 'text-gray-500'
              }`}
              onClick={() => setActiveTab(a)}
            >
              {a}
            </button>
          ))}
        </nav>
      </header>
      <main className=" text-black">
        {renderContent()}
      </main>
    </div>
  );
};

export default Navigation;
