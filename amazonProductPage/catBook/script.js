const bodyTag = document.querySelector('body');
const colorChangeBtn = document.getElementById('color-changer-btn');

colorChangeBtn.addEventListener('click', () => {
  bodyTag.style.backgroundColor = 'lightblue';
  bodyTag.style.transition = 'background-color 1s ease';
});