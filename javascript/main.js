dinerHeader();
function dinerHeader() {
     document.getElementById("Dinner__logo").style.cssText = "font-size:36px; font-weight:700;"
     document.getElementById("Dinner__search").style.cssText = "right:15px; top:0px; bottom: 0px;"
     document.getElementById("Dinner__input").style.cssText = "height: 45px; padding: 10px 50px 10px 20px; border: 1px solid white;"
     document.getElementById("close__menu").style.cssText = "width: 45px;height: 45px;position: absolute;right: 40px;top: 40px;overflow: hidden;border: none;     display: flex;align-items: center;justify-content: center; background: #ff6600; color:white; border-radius: 8px;"
}

// function openNav() {
//     document.getElementById("Diner__menu").style.display = "block";
//     document.getElementById("Diner__menu").classList.remove("container");
// }
  
// function closeNav() {
//     document.getElementById("Diner__menu").style.display = "none";
// }

const button = document.getElementById("Dinner__bars");
const closeBtn = document.getElementById("close__menu");
const overlay = document.getElementById("Diner__menu");

button.addEventListener('click', function() {
  overlay.classList.add('overlay-show');
})

closeBtn.addEventListener('click', function() {
  overlay.classList.remove('overlay-show');
})
