const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn=document.getElementById('btn')
const color=document.querySelector('.color')

btn.addEventListener('click',()=>{
    let hexColor='#'
    for(let i=0;i<6;i++){
        hexColor+=hex[getRandomNumer()]
    }
    const backColor=[...hexColor].reverse().join('').slice(0,6)
    color.textContent=hexColor
    document.body.style.backgroundColor=hexColor
    btn.style.backgroundColor=`#${backColor}`
})

function getRandomNumer(){
    return Math.floor(Math.random()* hex.length)
}