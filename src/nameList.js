import changeName from './titleNameCh';

export default function(array){
    let marcoLis = document.getElementsByClassName('listCreated');
    let bracketOut = document.createElement('div');
    bracketOut.classList.add('bracketM');
    marcoLis[0].innerHTML = "";
    marcoLis[0].appendChild(bracketOut);
    array.forEach(element => {
        let div = document.createElement('div');
        let title = document.createElement('h4');
        div.classList.add('titulosNuevos');
        div.classList.add('hoverL');
        title.classList.add('titNu')
        title.innerHTML = `${element}`;
        div.classList.add('menuDiv')
        div.append(title);
        let bracket = document.createElement('div');
        bracket.classList.add('bracketClaro')
        if(array.slice(-1)[0] == element){
            bracket.classList.replace('bracketClaro','bracketM');
        }
        marcoLis[0].appendChild(div);
        marcoLis[0].appendChild(bracket);
    });
    let btnNombres = Array.from(document.getElementsByClassName('titulosNuevos'));
    btnNombres.forEach(element => element.addEventListener('click',function(){
        changeName(element);
    }));
}