export default function(){
    if (localStorage.getItem('lists') == null){
        return ["Default"];
    } else {
        let devuelta = JSON.parse(localStorage.getItem('lists'))
        return devuelta;
    }
}