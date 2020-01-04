var colors = require('colors');

function message(){
  console.clear();
  console.log('Higher random numbers below indicate aggression %:')
  const random = Math.floor(Math.random().toFixed(2) * 100);
  for (let i = 0; i < 3; i++) { console.log(''); };
  console.log(`                      ${random.toString()}%`.green);
  for (let i=0; i < 3; i++) {console.log(''); };
}

function randomTimer(){
  console.clear();
  console.log('Welcome to the poker randomizer!'.red);
  console.log('Random numbers starting in 3 seconds!'.blue);
  console.log('Good luck player!'.green);
  setInterval(message, 3000);
}

randomTimer();