// components/TwoParagraphs.js
import React from 'react';

const TwoParagraphs = () => {
  return (
    <div className="two-paragraphs">
      <div className="centered-content">
        <div className="paragraph">
          <p>This is the left paragraph content.</p>

        </div>
        <div className="separator"></div>
        <div className="paragraph">
          <p>This is the right paragraph content.</p>
        </div>
      </div>
      <style jsx>{`
        .two-paragraphs {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 75vh;
        }
        .centered-content {
          display: flex;
          align-items: center;
        }
        .paragraph {
          flex: 1;
          padding: 90px;
        }

      `}</style>
    </div>
  );
};

// components/TwoParagraphs.js
// ... (previous code)

<style jsx>{`
  .two-paragraphs {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: hidden; /* Disable scroll bars for this container */
  }
  // ... (other styles)
`}</style>



export default TwoParagraphs;
