let name = "Joseph Sardashti";

let age = 28;

let birthday = "January 13";

let detroitGC = true;

let lifeEvents = [
  "I was born in Bartlesville, Oklahoma", 
  "I went to University of Oklahoma", 
  "I released my first 12in record in November 2018.",
  "I started working for my favorite synthesizer company in 2019."
]

if(detroitGC=true){
  console.log(`My name is ${name} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`)
}
else{
  console.log(`My name is ${name} and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`)
}

for(let i=0; i<lifeEvents.length; i++){
  console.log(lifeEvents[i]);
}

let counter = 0;

while(true){
  let randomNumber = (Math.floor(Math.random() * (10) + 1))
  if(randomNumber!==5) {
    counter++;
    console.log(`${randomNumber} !==5`);
    //was using "continue" here, ultimately was not necessary and just had to place "break" inside of else statement bracket
  }
  else{
    counter++;
    console.log(`5===5. It took ${counter} iterations to randomly generate the number 5.`)
    break;
  }
}