export default function(){
    if (localStorage.getItem('lists') != null){
        let devuelta = JSON.parse(localStorage.getItem('lists'))
        return devuelta;
    } else {
        return {"General":[]}
    }
}