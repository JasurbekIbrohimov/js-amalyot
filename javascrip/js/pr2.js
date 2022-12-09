const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");
const card3 = document.querySelector(".card3");

btn1.addEventListener("click", () => {
  card1.classList.toggle("blok");
  card2.classList.remove("blok");
  card3.classList.remove("blok");
});
btn2.addEventListener("click", () => {
  card1.classList.remove("blok");
  card2.classList.toggle("blok");
  card3.classList.remove("blok");

});
btn3.addEventListener("click", () => {
  card1.classList.remove("blok");
  card2.classList.remove("blok");
  card3.classList.toggle("blok");
});

// btn2.addEventListener('click',()=>{
//     card2.classList.toggle('blok');
// })
