import React, { useState } from 'react';
import WebContent from './WebContent';
import MobileContent from './MobileContent';
// import DesktopContent from './DesktopContent';

const renderContent = (activeTab) => {
    switch (activeTab) {
      case 'Web':
        return <WebContent />;
      case 'Mobile':
        return <MobileContent />;
      // case 'Desktop':
      //   return <DesktopContent />;
      default:
        return null;
    }
  };

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('Web');

  const tabNames = ['Web', 'Mobile'];

  

  return (
    <div><h1>Portfolio</h1>
    <div>
      
      <ul className="tab-navigation">
        {tabNames.map((tab) => (
          <li
            key={tab}
            className={activeTab === tab ? 'active' : ''}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </li>
        ))}
      </ul>
      <div className="tab-content">{renderContent(activeTab)}</div>
    </div>
    </div>
  );
}
