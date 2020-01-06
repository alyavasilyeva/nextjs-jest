import React from 'react';
import Image from './image.png';

export default function Header() {
  return (
    <div>
      <img src={Image} />
      <h1 className='title'>Welcome to Next.js!</h1>
    </div>
  );
}
