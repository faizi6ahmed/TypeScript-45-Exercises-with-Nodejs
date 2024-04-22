let guestList = ["Faizan", "Zohaib", "Aqsa", "Nimra"];

let dontCome = guestList[0];

console.log(dontCome, "Nahi a skta");

guestList.splice(0, 1, "Ali");

guestList.forEach(guest => console.log(`Salam ${guest}, would you like to Dinner with me?`))

