const articles=document.querySelectorAll('.content')
const btns=document.querySelectorAll('.tab-btn')
const about=document.querySelector('.about')

about.addEventListener('click', (e)=>{
    const id=e.target.dataset.id
    if(id){
        // remove active from other btns
        btns.forEach(btn=>{
            btn.classList.remove('active')
            e.target.classList.add('active')
        })
        // hide other articles
        articles.forEach(article=>{
            article.classList.remove('active')
        })
        const element=document.getElementById(id)
        element.classList.add('active')
    }
})