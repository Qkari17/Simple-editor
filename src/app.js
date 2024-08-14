const text = document.querySelector(`.text--js`);
const save = document.querySelector(`.save--js`);
const load = document.querySelector(`.load--js`);

save.addEventListener(`click`,() =>{
    localStorage.setItem(`content`, text.value)
})

load.addEventListener(`click`,()=>{
    text.value=localStorage.getItem(`content`)
})