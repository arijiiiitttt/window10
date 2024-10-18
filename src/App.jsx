import React, { useState, useEffect } from 'react';
import BackgroundComponent from './components/backgroundcomponent/BackgroundComponent';
import Mobileview from './components/MobileView/Mobileview';

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
  
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {isMobile ? <Mobileview /> : <BackgroundComponent />}
    </>
  );
};

export default App;
