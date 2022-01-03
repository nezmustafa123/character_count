let colour = Math.random();
colour = colour.toString(16); //convert the number to string need something that returns letter and number put 16 in there so it's base 16
colour = colour.substring(2, 8);
console.log(colour);
