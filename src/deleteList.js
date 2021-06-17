export default function(acti,list){
    Object.keys(list).forEach(elem=>{
        if(elem == acti){
            delete list[`${elem}`]
        }
    });
}