// would like to import this array as a module
const questions = [
  {
    question: 'Dutchman Jan Vermeer is famously theorized for employing this technique of light manipulation in aiding his fantastically detailed imagery. The method utilizes a pinhole to display a reversed image of light into a darkened chamber.',
    options: ['Camera', 'Camera Obscura', 'Projector', 'Lightbox'],
    correctOption: 'Camera Obscura'
  },
  {
    question: 'This branch of still life painting was especially popular in Flanders and the Netherlands in the 16th & 17th Centuries. Common imagery associated with these works were skulls, wilting flowers, and rotting foods. Common themes were death and excessive wealth.',
    options: ['Mortuus', 'Morbid', 'Tristus', 'Vanitas'],
    correctOption: 'Vanitas'
  },
  {
    question: 'This city in the Netherlands is renowned for its production of blue and white, or tin-glazed, pottery that emulates Chinese porcelain and provided a less expensive alternative to importing pottery from China.',
    options: ['Delft', 'Amsterdam', 'Utrecht', 'Gouda'],
    correctOption: 'Delft'
  },
  {
    question: 'This Dutch artist, born in Leiden, employed a workshop model which took on means of production similar to that of Peter Paul Rubens’ workshop. He was notorious for his debaucherous and scandalous behavior (relative to contemporary standards), and his difficulty in currying favor with the European courts.',
    options: ['Jacques de Claeuw', 'Pieter de Hooch', 'Rembrandt', 'Jan Steen'],
    correctOption: 'Rembrandt'
  },
  {
    question: 'Famous for his intense use of chiaroscuro, or the dramatic use of light and shadow, this Italian from the Baroque period was well loved for his art, but notorious with authorities for drunken brawls. He had to flee Rome after killing a man in such a brawl. He often would use low status models, such as courtesans and the poor, to be used in depictions of religious idols.',
    options: ['Carpaccio', 'Giotto', 'Caravaggio', 'Leonardo da Vinci'],
    correctOption: 'Caravaggio'
  },
  {
    question: 'This form of printmaking uses a plate of copper, zinc, or steel, coated in a waxy or acrylic ground. The artist could then use a needle to carve into the ground, exposing the metal underneath. An acidic solution was then used on the exposed metal to create a reusable plate to create prints. This printmaking form was especially easy to learn if the artist was already competent in drawing.',
    options: ['Etching', 'Engraving', 'Lithography', 'Woodcut'],
    correctOption: 'Etching'
  },
  {
    question: 'Talented in several mediums, and famous for works such as The Ecstasy of Saint Theresa, and St. Peter’s Baldachin, this Italian was better known for his sculpture than his painting, despite mastering both.',
    options: ['Francesco Borromini', 'Michelangelo', 'Carlo Maderno', 'Bernini'],
    correctOption: 'Bernini'
  },
  {
    question: 'Am immensely wealthy banking family with this surname went on to become one of the most powerful houses in Italy for many generations, while also being one of the largest patrons of the arts. They were so powerful, two members of the house rose to the title of pope, claiming the names Leo X and Clement VII.',
    options: ['Borgia', 'Medici', 'Sforza', 'Rothschild'],
    correctOption: 'Medici'
  },
  {
    question: 'This type of painting was particularly popular in the Netherlands for its depiction of everyday life scenes, often employing allegorical means of depicting famous Dutch proverbs. Painters famous in this style were Pieter Bruegel the Elder and Jan Steen.',
    options: ['Vanitas', 'Still Life Painting', 'Genre Painting', 'Caravaggism'],
    correctOption: 'Genre Painting'
  },
  {
    question: 'During the Protestant Reformation in the Netherlands, this social belief was pushed by powerful influencers such as John Calvin, resulting in the destruction of a number of great religious artworks.',
    options: ['Jansenism', 'Iconoclasm', 'Lutherism', 'Erasmus'],
    correctOption: 'Iconoclasm'
  }
]

// defining answer locations
let firstChoice = document.querySelector('.first-choice')
let secondChoice = document.querySelector('.second-choice')
let thirdChoice = document.querySelector('.third-choice')
let fourthChoice = document.querySelector('.fourth-choice')

// should this be a function that shuffles the value of the question?
// randomly selects object from array of questions
let randoQuestion = questions[Math.floor(questions.length * Math.random())]

// sets id that should be filled with random question text
let questionBox = document.querySelector('#question')
questionBox.innerText = randoQuestion.question

// after submit event occurs
function shuffle () {
  randoQuestion = questions[Math.floor(questions.length * Math.random())]
  questionBox.innerText = randoQuestion.question
  firstChoice.innerText = randoQuestion.options[0]
  secondChoice.innerText = randoQuestion.options[1]
  thirdChoice.innerText = randoQuestion.options[2]
  fourthChoice.innerText = randoQuestion.options[3]
}

// set radio inputs to show answers to each question
// would like to map this instead
firstChoice.innerText = randoQuestion.options[0]
secondChoice.innerText = randoQuestion.options[1]
thirdChoice.innerText = randoQuestion.options[2]
fourthChoice.innerText = randoQuestion.options[3]

// variables for radio options
let firstRadio = document.querySelector('#option1')
let secondRadio = document.querySelector('#option2')
let thirdRadio = document.querySelector('#option3')
let fourthRadio = document.querySelector('#option4')

// function passed into event listener
// theoretically can handle entire exchange
// may be wise to define more functions outside to call within the submit event
let total = 0
function formEvent (e) {
  e.preventDefault()
  if (firstRadio.checked && randoQuestion.options[0] === randoQuestion.correctOption) {
    console.log('test for 1')
  } else if (secondRadio.checked && randoQuestion.options[1] === randoQuestion.correctOption) {
    console.log('test for 2')
  } else if (thirdRadio.checked && randoQuestion.options[2] === randoQuestion.correctOption) {
    console.log('test for 3')
  } else if (fourthRadio.checked && randoQuestion.options[3] === randoQuestion.correctOption) {
    console.log('test for 4')
  } else {
    console.log(false)
  }
  shuffle()
  document.querySelector('input[name="radio"]:checked').checked = false
}

// variable to define button
let answerButton = document.querySelector('.answer1')

// trigger click event
answerButton.addEventListener('click', formEvent)

// insert score into div
let streak = document.querySelector('.streak').innerText = total.toString()
