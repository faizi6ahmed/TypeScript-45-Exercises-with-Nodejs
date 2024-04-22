// Making a Array of Countries and Print its Original Order
let countriesTovisit: string[] = ["China", "Denmark", "Brazil", "Argentina"];
console.log("Original Order:", countriesTovisit);

// Print the Array in Alphabetical order without modifying the Actual Array list
console.log("Alphabetical Order:", [...countriesTovisit].sort());

// show that the array is still in its Original order
console.log("still in Original Order:", countriesTovisit);

// Print the Array in Reversed Order without modifying the Actual Array List
console.log("Reverse Order:", [...countriesTovisit].reverse());

// show that the array is still in its Original order
console.log("still in Original Order:", countriesTovisit);

// We have Changed the Original Array Order Now
console.log("Original Array Reversed:", countriesTovisit.reverse());

// Print the array to show that its back to its original order
console.log("Back to Original Order:", countriesTovisit.reverse());

// Print the array to show that its order has been changed in Alphabetical order now
console.log("Sorted in Alphabetical Order:", countriesTovisit.sort());

// We have Changed again the Original Array Order Now in reverse order again
console.log("Original Array Reversed Again:", countriesTovisit.reverse());
