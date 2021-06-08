//JS FUNCTIONS 1 *****
//1

function kelvinToFahrenheit(kelvin) {
  return Math.round((kelvin * 9) / 5 - 459.67);
}

console.log(kelvinToFahrenheit(115)); //-253

//2

function humanAgeInDogYears(myAge) {
  if (myAge <= 15)
    return console.log(
      `I am ${myAge} years old in human years, which is 1 years old in dog years.`
    );
  else if (myAge > 15 && myAge <= 24)
    return console.log(
      `I am ${myAge} years old in human years, which is 2 years old in dog years.`
    );
  else
    return console.log(
      `I am ${myAge} years old in human years, which is ${Math.round(
        myAge / 8 + 0
      )} years old in dog years.`
    );
}

const dogYears = humanAgeInDogYears(36); //I am 36 years old in human years, which is 5 years old in dog years.
const dogYears2 = humanAgeInDogYears(15); //I am 15 years old in human years, which is 1 years old in dog years.

//3

function answerMyQuestion(userName, userQuestion) {
  const answers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes - definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
  ];
  const answer = function () {
    const random = Math.round(Math.random() * 20 - 1);
    return answers[random];
  };

  return console.log(`${userName}, ${answer()}`);
}
answerMyQuestion("Mary", "Will I have a boyfriend?"); //Mary, Yes - definitely.

//4

function raceTime(userAge, registeredEarly) {
  let raceNumber = Math.floor(Math.random() * 1000);
  if (userAge >= 18 && registeredEarly) {
    raceNumber += 1000;
    console.log(
      `Your race starts at 9:30 am, and your race number is ${raceNumber}. Good luck!`
    );
  } else if (userAge >= 18 && !registeredEarly) {
    console.log(
      `Your race starts at 11:00 am, and your race number is ${raceNumber}. Good luck!`
    );
  } else {
    console.log(`You are too young to run a race.`);
  }
}
raceTime(35, false); //Your race starts at 11:00 am, and your race number is 273. Good luck!
raceTime(24, true); //Your race starts at 9:30 am, and your race number is 1209. Good luck!
raceTime(16, true); //You are too young to run a race.
