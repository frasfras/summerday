import React from 'react';

const Avatar = ({ energy, fun }) => {
  const getEmoji = () => {
    if (energy < 20) return '😴';
    if (fun > 80) return '😄';
    if (energy > 80 && fun > 50) return '😎';
    if (energy > 50 && fun > 30) return '🙂';
    return '😐';
  };

  return (
    <div style={{ fontSize: '50px', marginBottom: '10px' }}>
      {getEmoji()}
    </div>
  );
};

export default Avatar;