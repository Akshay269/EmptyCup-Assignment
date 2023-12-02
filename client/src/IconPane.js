import React from 'react'

const IconPane = ({ icons,onShortlistClick }) => {
    return (
      <div className="flex justify-between p-4">
        {icons.map((icon, index) => (
          <div key={index} className="flex flex-col items-center" onClick={index === 3 ? onShortlistClick : undefined}>
            <img src={icon.src} alt={icon.alt} onClick={icon.onClick} />
          </div>
        ))}
      </div>
    );
  };

export default IconPane