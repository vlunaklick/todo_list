import uploList from './uploList';

export default function(nom,arr){
    let mirar = nom.children[0].textContent;
    Object.keys(arr).forEach(element => {
        let valor = arr[element];
        valor.forEach(va =>{
            if(va["acti"] == mirar){
                let index = arr[element].indexOf(va);
                arr[element].splice(index,1);
                uploList(arr);
            }
        })
    });
}