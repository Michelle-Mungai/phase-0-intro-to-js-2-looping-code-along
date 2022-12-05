// Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//   }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     debugger;
//   }

//   return gifts;
// }

// wrapGifts(gifts);

const names = ['Ada','Brendan','Ali'];
const event = 'birthday';
let thankYouCard = [];

function writeCards(names, event){
for (let x = 0; x < names.length; x++) {
    let message = `Thank you, ${names[x]}, for the wonderful ${event} gift!`;
    thankYouCard.push(message);
}
console.log(thankYouCard);
return thankYouCard;
}
// console.log(writeCards(names,event));


// function wrapGifts(gifts) {
//   let i = 0; // the initialization moves OUTSIDE the body of the loop!
//   while (i < gifts.length) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     i++; // the iteration moves INSIDE the body of the loop!
//   }

//   return gifts;
// }

// wrapGifts(gifts);

function countDown(number){
let countDown = 10;
while (countDown >= -0) {
    console.log(countDown--);
}
}

// countDown(number)


