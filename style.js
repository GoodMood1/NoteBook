const inputList = document.querySelector('.inputList');
const listitem = document.querySelector('.listitem');
const storageBoxes = localStorage.getItem('storageBoxes')?JSON.parse(localStorage.getItem
('storageBoxes')):{};
let count = Object.keys(storageBoxes).length;
inputList.addEventListener('keydown',(e)=>{
    if(e.keyCode === 13){
        count++;
       const box =  `<div class="box" id="box${count}" style="transform:rotate(${Math.random()*10-5}deg)">
   <div class="close"><h1>X</h1></div>
   <textarea readonly>${inputList.value}</textarea>
    </div>`;
storageBoxes[`box${count}`]=inputList.value;
localStorage.setItem('storageBoxes',JSON.stringify(storageBoxes));
listitem.insertAdjacentHTML('afterbegin',box);
    }
});

for(const id in storageBoxes){
    const box =
    `<div class="box" id="${id}" style="transform:rotate(${Math.random()*10-5}deg)">
   <div class="close"><h1>X</h1></div>
   <textarea readonly>${storageBoxes[id]}</textarea>
    </div>`;
listitem.insertAdjacentHTML('afterbegin',box);
}

listitem.addEventListener('click',(e)=>{
    const elem = e.target;
    if(elem.parentNode.classList.contains('close')){
        const boxe = elem.closest('.box');
        boxe.remove();
        delete storageBoxes[boxe.class];
        localeStorage.setItem('storageBoxes',JSON.stringify(storageBoxes));
    }
})