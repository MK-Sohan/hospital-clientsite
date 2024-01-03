import React from 'react';

const Keyboard = ({ handleKeyClick }) => {
  const alphabet = [...Array(26)].map((_, index) => String.fromCharCode(index + 65));

  return (
  <div className='w-[366px] bg-[#FFEAEA] p-2'>
      <p className='text-[16px] px-2 py-2 font-[500] text-black'>Select Alphabet</p>
    <div className=" grid grid-cols-7 justify-center items-center">
        
      {alphabet.map((letter) => (
        <button
          key={letter}
          className="inline-flex items-center justify-center w-10 h-10 rounded bg-transparent border-[1px] border-black text-black font-semibold mx-2 my-2 hover:bg-green-400"
          onClick={() => handleKeyClick(letter)}
        >
          {letter}
        </button>
      ))}
    </div>
  </div>
  );
};

export default Keyboard;
