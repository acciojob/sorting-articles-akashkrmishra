//your JS code here. If required.
let list=document.querySelectorAll("#band > li");

console.log(list);
let arr=[];
for(let i=0;i<list.length;i++){
    arr[i]=list[i].innerHTML;
}

function strip(bandName){
    return bandName.replace(/^(a |the |an)/i, "").trim();
};

const sortedBrands=arr.sort((a,b) => strip(a) > strip(b) ? 1: -1);
console.log(sortedBrands);