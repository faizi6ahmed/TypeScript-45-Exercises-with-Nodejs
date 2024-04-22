var guestList = ["Faizan", "Zohaib", "Aqsa", "Nimra"];
var dontCome = guestList[0];
console.log(dontCome, "Nahi a skta");
guestList.splice(0, 1, "Ali");
guestList.forEach(function (guest) { return console.log("Salam ".concat(guest, ", would you like to Dinner with me?")); });
