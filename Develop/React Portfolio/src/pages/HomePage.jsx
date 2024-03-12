import React from 'react';
import picture from '../../Images/jlsilva.png';

export default function HomePage() {

  return (
      <div id="home-page" className="flex items-center justify-center flex-col mt-10">
          <img src={picture} alt="Jose Silva" className="aboutMe-picture" />
            <h1 className="text-center text-3xl mt-10 mb-20">Welcome to Joses Portfolio</h1>
    </div>
  );
};

