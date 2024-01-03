import React from 'react';
import Keyboard from './Keyboard';

const HandleClick = () => {
  const handleKeyClick = (letter) => {
    console.log('Clicked:', letter);
    // Handle the key click event as needed
  };

  return (
    <div className="container mx-auto py-8">
      <Keyboard handleKeyClick={handleKeyClick} />
    </div>
  );
};

export default HandleClick;
