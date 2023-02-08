const hamburgerBtn = document.querySelector('#hamburgerBtn');
const dropdown = document.querySelector('.dropdown');


hamburgerBtn.addEventListener('click', function() {
  dropdown.classList.toggle('.hide');
});