const btns=document.querySelectorAll('.btn')
const value=document.querySelector('#value')
let num=0;
btns.forEach(item=>{
    item.addEventListener('click',e=>{
        const style=e.currentTarget.classList
        if(style.contains('decrease')){
            num--
        }
        else if(style.contains('increase')){
            num++
        }else{
            num=0
        }

        if(num > 0){
            value.style.color="green"
        }
        if(num < 0){
            value.style.color="red"
        }
        if(num === 0){
            value.style.color="#222"
        }

        value.textContent=num
    })
})