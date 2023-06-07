import React, { useState } from 'react';


const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    
    <div className={`drawer ${isOpen ? 'open' : ''}`}>
      <div className="drawer-handle" onClick={toggleDrawer}>
        <p>+</p>
      </div>
      {isOpen && (
        <>
        <h2>DotClick</h2>
        <div className="drawer-content">
          <img src="#" alt="-" />
          <span>PRODUCTS</span>
        </div>
        </>
      )}
    </div>
    </>
  );
};

export default Drawer;
