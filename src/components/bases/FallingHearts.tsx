// components/HeartAnimation.tsx
import React from 'react';

const FallingHearts: React.FC = () => {
  return (
    <div className="wrapper z-10">
      <div className={`heart x1`}></div>
      <div className={`heart x2`}></div>
      <div className={`heart x3`}></div>
      <div className={`heart x4`}></div>
      <div className={`heart x5`}></div>
      <div className={`altheart x6`}></div>
    </div>
  );
};

export default FallingHearts;
