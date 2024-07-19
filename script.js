//your JS code here. If required.
const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog'
];
// function strip(bandName) {
//   return bandName.replace(/^(a |an |the )/i, '').trim();
// }
// const sortedBands = bands.sort((a, b) => strip(a).localeCompare(strip(b)));
// const bandList = document.getElementById('bands');
// sortedBands.forEach(band => {
//   const li = document.createElement('li');
//   li.textContent = band;
//   bandList.appendChild(li);
// });









// let list=document.querySelectorAll("#bands > li");

// console.log(list);
// let arr=[];
// for(let i=0;i<list.length;i++){
//     arr[i]=list[i].innerHTML;
// }

function strip(bandName){
    return bandName.replace(/^(a |the |an)/i, "").trim();
};

const sortedBrands=bands.sort((a,b) => strip(a) > strip(b) ? 1: -1);
console.log(sortedBrands);