var buttton = document.querySelector("button");


// var isPurple = false;

// buttton.addEventListener("click", function() {
//   if(isPurple) {
//       document.body.style.backgroundColor = "white";
//       isPurple = false;
//   } else {
//       document.body.style.backgroundColor = "purple";
//       isPurple = true;
//   }
// });

//or shorter

buttton.addEventListener("click", function() {
    document.body.classList.toggle("purple");
  });