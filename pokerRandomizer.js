function message(){
  console.clear();
  console.log('Random number below. #\'s indicate aggression %:')
  let random = Math.random().toFixed(2) * 100;
  console.log(`${Math.floor(random)}%`);
}

function randomTimer(){
  // while (true) {
  //   setTimeout(message,3000);
  // }
  message()
}

randomTimer();

//setTimeout(function(){ alert("Hello"); }, 3000);