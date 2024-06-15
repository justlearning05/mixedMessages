
//Astrology 

let zodiacSigns = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
let planets = ["Sun", "Moon", "Mercury", "Venus", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"];

let dailyQuotes = [
  "Today is a day to embrace new challenges and take bold steps forward.",
  "Patience will be your greatest asset today. Trust the process.",
  "Your adaptability and quick thinking will lead you to success today.",
  "Focus on nurturing yourself and your relationships today.",
  "Shine bright today and let your creativity and leadership skills guide you.",
  "Attention to detail will bring you closer to achieving your goals today.",
  "Seek balance in all aspects of your life today for harmony and peace.",
  "Embrace transformation and let go of what no longer serves you.",
  "Explore new horizons and expand your knowledge today.",
  "Persistence and determination will pave the way for your success today.",
  "Embrace your uniqueness and think outside the box today.",
  "Trust your intuition and let your compassionate nature shine today."
];

//-----------------------

//Saved Outputs
let inputUserZsign
let outputRandomPlanet
let outputRandomPhrase

//Random Generator
//function random = var[Math.floor(Math.random() * var)] 


//Check if the user input Zodiac sign matches any of the values in array [zodiacSigns]
function determineZSign (input) {
  for (i=0; i < zodiacSigns.length; i++) {
    if (input === zodiacSigns[i]) {
        inputUserZsign = input
        return inputUserZsign
      } 
}     
return 'Invalid Entry'
};

console.log(determineZSign('Pisces'))
console.log(inputUserZsign)

//Generate random planet 
function randomPlanet (input) {
  outputRandomPlanet = planets[Math.floor(Math.random() * planets.length)] 
  return outputRandomPlanet
}

console.log(planets.length)
console.log(randomPlanet())

//Generate random phrase
function randomPhrase (input) {
  outputRandomPhrase = dailyQuotes[Math.floor(Math.random() * dailyQuotes.length)] 
  return outputRandomPhrase
}

console.log(dailyQuotes.length)
console.log(randomPhrase())


function combinedPhrase (input) {
  let outputPhrase
  if (determineZSign !== ' ') {
    outputPhrase = `${inputUserZsign} you are on the planet ${outputRandomPlanet}.`
  } return `${outputPhrase} ${outputRandomPhrase}`
}

console.log(combinedPhrase(inputUserZsign))
