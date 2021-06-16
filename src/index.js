const navBtn = document.getElementById('navRespo');

const nav = document.getElementsByClassName('navP');

navBtn.addEventListener('click',function(){
    if(nav[0].classList.contains('hidden')){
        nav[0].classList.remove('hidden');
    } else{
        nav[0].classList.add('hidden');
    }
});