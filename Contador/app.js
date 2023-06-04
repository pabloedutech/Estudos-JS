let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn) {
  btn.addEventListener("click", function(e) {
    const style = e.currentTarget.classList;
      if(style.contains('decrease')) {
        count --;
      } else if (style.contains('increase')) {
        count ++;
      } else {
        count = 0;
      }
      if (count > 0) {
        value.style.color = "blue";
      }
      if (count < 0) {
        value.style.color = "red";
      }
      if (count === 0) {
        value.style.color = "#222";
      }
      value.textContent = count;
  })
})