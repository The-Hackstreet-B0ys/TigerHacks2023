// pages/index.js
import React from 'react';
import TwoParagraphs from '../components/TwoParagraphs.js';

const Home = () => {
  return (
    <div>
        {/* <head>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
            <link href="https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap" rel="stylesheet"></link>
        </head> */}
        
        <h1>Your Webpage</h1>
        <TwoParagraphs />
    </div>
  );
};

export default Home;
