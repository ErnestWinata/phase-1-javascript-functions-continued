// code your solution here
function saturdayFun(chore = "roller-skate"){
    return `This Saturday, I want to ${chore}!`;

console.log(saturdayFun())
console.log(saturdayFun("bathe my dog"));
}


function mondayWork(work = "go to the office"){
    return `This Monday, I will ${work}.`;

console.log(mondayWork())
console.log(mondayWork("work from home"));
}

function wrapAdjective(placeholder = "*") {
    return function(compliment = "special") {
      return `You are ${placeholder}${compliment}${placeholder}!`;
    };
  }
  const praise = wrapAdjective("!");
  console.log(praise("a hard worker")); 
  console.log(praise("a dedicated programmer")); 

  