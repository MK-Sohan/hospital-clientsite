import React, { useState } from 'react';

const TestComponent = () => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelectClick = () => {
    setIsSelected(true);
  };

  const handleCancelClick = () => {
    setIsSelected(false);
  };

  return (
    <div className="single_test_right flex gap-x-2">
      <button
        className={`rounded-[5px] w-[149px] h-[56px] ${
          isSelected ? 'bg-[#00A662] text-white' : 'bg-[#88D3B4]'
        } text-[20px] font-[500]`}
        onClick={handleSelectClick}
      >
        {isSelected ? 'SELECTED' : 'SELECT'}
      </button>
      <button
        className={`rounded-[5px] w-[149px] h-[56px] ${
          isSelected ? 'bg-[#FFC3C3]' : 'bg-[#FFC3C3]'
        } text-[20px] font-[500]`}
        onClick={handleCancelClick}
      >
        {isSelected ? 'Unseleted' : 'CANCEL'}
      </button>
    </div>
  );
};

export default TestComponent;
