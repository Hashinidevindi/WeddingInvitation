import React from 'react';

export const PetalLayer: React.FC = () => {
  return (
    <div aria-hidden="true" className="petal-layer" data-purpose="floating-petals">
      <div className="petal w-4 h-5 top-[-20px] left-[12%]" style={{ animationDelay: '0s', animationDuration: '9s' }} />
      <div className="petal w-3 h-4 top-[-20px] left-[68%]" style={{ animationDelay: '2.5s', animationDuration: '11s' }} />
      <div className="petal w-5 h-6 top-[-20px] left-[84%]" style={{ animationDelay: '5s', animationDuration: '13s' }} />
      <div className="petal w-3 h-4 top-[-20px] left-[32%]" style={{ animationDelay: '7s', animationDuration: '10s' }} />
      <div className="petal w-4 h-5 top-[-20px] left-[6%]" style={{ animationDelay: '4s', animationDuration: '12s' }} />
      <div className="petal w-3 h-5 top-[-20px] left-[52%]" style={{ animationDelay: '9s', animationDuration: '14s' }} />
    </div>
  );
};
