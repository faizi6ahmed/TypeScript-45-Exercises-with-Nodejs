// Creating a Guest List Array
var guestlist = ["Faizan", "Zohaib", "Aqsa", "Nimra"];
// making variable for those guest who cant come
var dontCome = guestlist[0];
// Print the name of guest who cant come
console.log(dontCome, "Nahi a Skty Hain");
// Add or Remove Values from Guest List Array
guestlist.splice(0, 1, "Ali");
// Message Print for Bigger Table
console.log("Good News ! We have Found a Bigger Table For Dinner");
// Adding a new guest at Starting index of array
guestlist.unshift("Ahmed");
// Adding a new value at ending index of array
guestlist.push("Zain");
// Add a middle index of our guest list array
var middleIndex = Math.floor(guestlist.length / 2);
// Adding a new guest to middle index of array
guestlist.splice(middleIndex, 0, "Hamza");
// Print Message of Updated List
console.log("Updated List of our Guests");
// Sending a invitation message to our guests one by one with their names
guestlist.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", would you like to  dinner with me")); });
// Inform that only two guests can be invited for dinner
console.log("Unfortunately, the new dinner table wont arrive on time, so I can only invite two Guests to dinner with me");
// Using while-loop to remove guests from the array until only two names remain
while (guestlist.length > 2) {
    var removedGuest = guestlist.pop();
    console.log("Sorry, ".concat(removedGuest, " I cant invite you to dinner"));
}
// Sending a invitation to the last two guest on the list
console.log("Invitation to the last 2 guests");
guestlist.forEach(function (lasttwo) { return console.log("Luckly ".concat(lasttwo, ", you are still invited to dinner")); });
// Removing last two guests from the list
guestlist.pop();
guestlist.pop();
console.log("Empty List:", guestlist);
