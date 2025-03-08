import React from 'react';

function Scorlbar() {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <div className="w-32 h-32 overflow-scroll"> {/* Increased size to make sure overflow occurs */}
      <ul>
        {list.map((l, index) => {
          return <li key={index}>{l}</li>;
        })}
      </ul>
    </div>
  );
}

export default Scorlbar;
