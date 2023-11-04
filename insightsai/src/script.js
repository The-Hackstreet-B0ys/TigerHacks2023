document.addEventListener('DOMContentLoaded', function () {
  const paragraphs = document.querySelectorAll('.paragraph');

  // Function to change the color to red when clicked
  function changeColorToRed(event) {
    const paragraph = event.currentTarget;
    paragraph.style.color = 'red';
  }

  function fadeToBackGround(event) {
    const paragraph = event.currentTarget;
    paragraph.fadeOut(2000, function() {
      // Once the fade out is complete, you can perform additional actions here if needed
    });
  }

  // Add a click event listener to each paragraph and set pointer-events to "auto"
  paragraphs.forEach(paragraph => {
    paragraph.addEventListener('click', fadeToBackGround);
    paragraph.style.pointerEvents = 'auto';
  });


});
