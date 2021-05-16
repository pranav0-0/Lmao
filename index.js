const readmore = document.querySelector('.readmore');
const text = document.querySelector('.para');

readmore.addEventListener('click',(e)=>{
text.classList.toggle('showmore');
})