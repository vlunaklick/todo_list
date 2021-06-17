import addList from './addList.js';
import checkList from './checkList';
import uploList from './uploList';
import nameList from './nameList.js';
import deleteList from './deleteList.js';
import './style.css';
import changeName from './titleNameCh.js';

/* Important */

const body = document.querySelector('body');

let listaOficial = checkList();

nameList(listaOficial);
/* Button add list */

const addListBtn = document.getElementById('add');

addListBtn.addEventListener('click',function(){
    if (body.clientWidth < 1000){
        nav[0].classList.add('hidden');
    }
    addList();
    let inputText = document.getElementsByClassName('inputAdd');
    let btnAdd = document.getElementsByClassName('btnAddL');
    let btnCan = document.getElementsByClassName('btncan');
    btnAdd[0].addEventListener('click',function(){
        let valor = inputText[0].value;
        listaOficial[`${valor}`]={};
        console.log(listaOficial)
        let newW = document.getElementsByClassName('allPan');
        uploList(listaOficial);
        nameList(listaOficial);
        body.removeChild(newW[0]);
    });
    btnCan[0].addEventListener('click',function(){
        let newW = document.getElementsByClassName('allPan');
        body.removeChild(newW[0]);
    });
});

/* Button responsive */

const navBtn = document.getElementById('navRespo');

const nav = document.getElementsByClassName('navP');

navBtn.addEventListener('click',function(){
    if(nav[0].classList.contains('hidden')){
        nav[0].classList.remove('hidden');
    } else{
        nav[0].classList.add('hidden');
    }
});

/* Delete list */

const delLisBtn = document.getElementById('deleLis')

delLisBtn.addEventListener('click',function(){
    let tituloActivo = document.getElementById('title');
    if(!(tituloActivo.textContent == "General")){
        deleteList(tituloActivo.textContent,listaOficial);
        uploList(listaOficial);
        nameList(listaOficial);
        changeName('General');
    }
});

/* Add ToDo to the list */

const addLisBtn = document.getElementById('addnote');

addLisBton.addEventListener('click',function(){

});