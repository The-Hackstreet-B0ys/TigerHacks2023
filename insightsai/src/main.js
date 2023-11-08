// import css
import '../style.css';
// Get references to HTML elements with specific IDs.
const leftParagraph = document.getElementById('left-paragraph');
const rightParagraph = document.getElementById('right-paragraph');
const scoreValue = document.getElementById('score-value');

// Initialize variables for score and question.
let score = 0;
let question = 0; // Start with the first question

// Arrays for AI-generated and human-generated paragraphs.
const aiGeneratedParagraphs = [
  "We must do everything we can, tigers, tigers, tigers, to protect these magnificent creatures, tigers, tigers, tigers. For tigers, tigers, tigers, are not just animals, tigers, tigers, tigers, they are a symbol of our wild world, tigers, tigers, tigers, and a reminder of the beauty and power of nature, tigers, tigers, tigers",
  "More than 500,000 people attended rallies across Mexico on Saturday to denounce violence against women, in a demonstration that also called for the law to be modified. Women marched alongside men calling for a constitutional reform to prevent violence against women, and staged marches of their own. The gathering of marches marked International Women's Day, a day on which women's rights advocates work to highlight gender discrimination.",
  "Charles Ponzi, known for the Ponzi scheme, promised investors substantial returns through international arbitrage involving postal reply coupons. However, he used new investments to pay earlier participants, leading to a collapse and his imprisonment, making his name synonymous with financial fraud.",
  "US appeals court judges have revived the legal battle over Fortnite dance moves, overturning the dismissal of choreographer Kyle Hanagami's lawsuit against Epic Games. The 9th Circuit Court of Appeals emphasized that choreography encompasses more than just 'poses.' This ruling is significant for choreographers and creatives in the digital media age. The case now returns to the district court for further evaluation.",
  "Pluto is a dwarf planet in the Solar System. Its formal name is 134340 Pluto. Pluto is the ninth largest body that moves around the Sun. Upon first being discovered, Pluto was considered a planet but was reclassified to a dwarf planet in 2006. It is the largest body in the Kuiper belt. Like other members of the Kuiper belt, Pluto is mainly made of rock and ice. Pluto is very far from the Sun, so its temperature is very low.  ",
];
const humanGeneratedParagraphs = [
  "Previously MU had two mascots, a male and a female, but neither had an identity. This contest was held on campus, over a period of a few weeks, to develop a name for the Tiger mascot. The winner, a student, submitted the name Truman (after Missouri-bred President of the United States Harry S Truman). The name stuck and has been popular ever since.",
  "An International Women’s Day rally in Mexico on Tuesday drew thousands of protesters, with throngs marching against violence and streaming past the presidential palace and national monuments in the capital that had been cordoned off with huge metal fences amid fears of unrest. President Andrés Manuel López Obrador, who has been accused of not doing enough to stem the rise in femicides, urged calm while warning that the protests could turn violent.",
  "During Sam Bankman-Fried’s monthlong fraud trial, prosecutors presented damning evidence that the fallen crypto founder knew full well what he was doing from the beginning. He knew that Alameda Research borrowed billions in customer funds from FTX. He knew his fellow executives fabricated balance sheets to send to lenders. He knew FTX wasn’t fine when he told customers it was.",
  "This week, a panel of US appeals court judges has renewed the legal battle over Fortnite dance moves by reversing the dismissal of a lawsuit filed last year by professional choreographer Kyle Hanagami against Epic Games. Billboard pointed out the opinion filed on November 1st (PDF), where US 9th Circuit Court of Appeals Judge Richard Paez wrote that even if individual elements of a dance can’t be copyrighted, the arrangement can. The lower court said choreographic works are made up of poses that aren’t protectable alone.4",
  "Pluto is a dwarf planet located in the Kuiper belt. It was discovered in 1930 and was initially classified as a planet. However, in 2006, it was reclassified as a dwarf planet due to the discovery of other similar objects in the Kuiper belt. Pluto is the largest known dwarf planet and has a complex system of five moons. Its surface is also quite diverse, featuring mountains, valleys, and glaciers.",
];

function addClickEventListeners() {
  leftParagraph.addEventListener('click', () => handleUserClick(true));
  rightParagraph.addEventListener('click', () => handleUserClick(false));
}

// Function to remove click event listeners from paragraphs
function removeClickEventListeners() {
  leftParagraph.removeEventListener('click', () => handleUserClick(true));
  rightParagraph.removeEventListener('click', () => handleUserClick(false));
}

// Function to show the next question
// Function to show the next question
function showNextQuestion() {
  if (question === 5) {
    removeClickEventListeners();
    sleep(1500);
    endFunction();
    return;
  }

  const randomTF = getRandomTF();

  if (randomTF) {
    leftParagraph.textContent = aiGeneratedParagraphs[question];
    rightParagraph.textContent = humanGeneratedParagraphs[question];
    // Set a data attribute indicating this is an AI-generated paragraph
    leftParagraph.dataset.isAIParagraph = 'true';
  } else {
    leftParagraph.textContent = humanGeneratedParagraphs[question];
    rightParagraph.textContent = aiGeneratedParagraphs[question];
    // Remove the data attribute if not AI-generated
    leftParagraph.removeAttribute('data-is-ai-paragraph');
  }

  question++;
}

// Function to handle user clicks and check the answer
function handleUserClick(userClickedOnAI) {
  // Check if the left paragraph is an AI-generated paragraph
  const isAIParagraph = leftParagraph.dataset.isAIParagraph === 'true';

  if (userClickedOnAI && isAIParagraph) {
    score++;
  }

  scoreValue.textContent = score;
  showNextQuestion();
}

// Function to generate true/false with a 50/50 chance.
function getRandomTF() {
  return Math.random() < 0.5;
}

// Show the first question when the page loads.
addClickEventListeners();
showNextQuestion();


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


function endFunction() {
  // Change the score-container background and text color to black
  $('#score').remove();


  // Remove all elements inside 'masterdiv' using jQuery
  $('#masterdiv').empty();

 // Create a new element for the end score
 const endScore = document.createElement('div');
 endScore.textContent = `Your Score: ${score}`;
 endScore.classList.add('end-score');

 // Create a <p> element for additional text
 const additionalText = document.createElement('p');
 additionalText.textContent = "Thank you for playing!"; // Modify the text as needed

 // Append the end score and additional text elements to 'masterdiv'
 $('#masterdiv').append(endScore);


  $('#masterdiv').append("<br>");

  $('#masterdiv').append(additionalText);
}
