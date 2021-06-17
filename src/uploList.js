export default function(array){
    let subida = JSON.stringify(array);
    localStorage.setItem('lists',subida);
}