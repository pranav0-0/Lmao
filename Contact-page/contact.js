const readmore = document.querySelector('.more');
const text = document.querySelector('.info');

readmore.addEventListener('click',(e)=>{
text.classList.toggle('showmore');
})
