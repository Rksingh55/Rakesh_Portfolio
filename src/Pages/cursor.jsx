// CursorBubble.js

import React, { useEffect, useState } from 'react';
// import './CursorBubble.css';

const CursorBubble = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [color, setColor] = useState('#00f'); // Initial color

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = () => {
      setColor(getRandomColor());
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let newColor = '#';
    for (let i = 0; i < 6; i++) {
      newColor += letters[Math.floor(Math.random() * 16)];
    }
    return newColor;
  };

  return <div className="cursor-bubble z-[1000]" style={{ left: `${position.x}px`, top: `${position.y}px`, backgroundColor: color }} />; 
  
};

export default CursorBubble;
