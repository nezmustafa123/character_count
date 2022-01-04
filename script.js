const hex = document.querySelector(".hex");
const btn = document.querySelector(".generate");

//function thate generates colour
const generateColour = () => {
  const randomColour = Math.random().toString(16).substring(2, 8);

  document.body.style.backgroundColor = "#" + randomColour; //append the string to hash symbol set background colour to hash which is string
  hex.innerHTML = "#" + randomColour;
};
btn.addEventListener("click", generateColour);

// let colour = Math.random();
// colour = colour.toString(16); //convert the number to string need something that returns letter and number put 16 in there so it's base 16
// colour = colour.substring(2, 8);
// console.log(colour);
// console.log(typeof colour);
