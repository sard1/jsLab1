let hours = prompt ("How many hours did you work?")
let wage = prompt ("What is your hourly wage?")

if(hours>40){
  pay = (wage*40)
  otPay = (((wage*1.5)) * (hours - 40));
  totalPay = (pay + otPay);
  console.log(`Your pay is ${totalPay}`);
}
else{
  pay = (wage*hours);
  totalPay= pay;
  console.log(`Your pay is ${pay}`);
}

weeks = 0;

while(true){
  if(totalPay*weeks<1000000){  
  weeks++;
  }
  else{
    console.log(`It will take you ${weeks} weeks to earn $1,000,000 working ${hours} hours a week at $${wage}/hour.`)
    break;
  }
}
 