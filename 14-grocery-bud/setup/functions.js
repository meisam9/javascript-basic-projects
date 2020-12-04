// ****** FUNCTIONS **********
function addItem(e){
    e.preventDefault()
    const value=grocery.value
    const id= new Date().getTime().toString() // declare unique id
    if (value && !editFlag){
        createListItems(id,value)
        // display alert
        displayAlert('item added to the list', 'success')
        // show container
        container.classList.add('show-container')
        // add to local storage
        addToLocalStorage(id,value)
        // set back to default
        setBackToDefault()
    }else if(value && editFlag){
        editElement.innerHTML=value
        displayAlert('value changed', 'success')
        // edit local storage
        editLocalStorage(editId,value)
        setBackToDefault()
    }else{
        displayAlert('empty value','danger')
    }
}

function displayAlert(text,action){
    alert.textContent=text
    alert.classList.add(`alert-${action}`)

    setTimeout(()=>{
        alert.textContent= ""
    alert.classList.remove(`alert-${action}`)
    },1500)
}
//clear irems
function clearItems(){
    const items=document.querySelectorAll('.grocery-item')

    if(items.length > 0){
        items.forEach(item=>{
            list.removeChild(item)
        })
    }
    container.classList.remove('show-container')
    setBackToDefault()
    displayAlert('empty list','danger')
    localStorage.removeItem('list')
}
//delete function
function deleteItem(e){
    const element=e.currentTarget.parentElement.parentElement
    const id = element.dataset.id
    list.removeChild(element)
    if(list.children.length === 0 ){
        container.classList.remove('show-container')
    }
    displayAlert('item removed','danger')
    setBackToDefault(
        // remove from local storage
        removeFromLocalStorage(id) 
    )
}
// edit function
function editItem(e){
    const element=e.currentTarget.parentElement.parentElement
    // set edit item
    editElement=e.currentTarget.parentElement.previousElementSibling
    // set from value
    grocery.value= editElement.innerHTML
    editFlag=true
    editId=element.dataset.id
    submitBtn.textContent='edit'

}
//set back to default
function setBackToDefault(){
    grocery.value=""
    editFlag=false
    editId=''
    submitBtn.textContent='submit'
}
// ****** LOCAL STORAGE **********
// add to local storage
function addToLocalStorage(id,value){
    const grocery={id, value}
    let items = getLoaclStorage()
    items.push(grocery)
    localStorage.setItem('list', JSON.stringify(items))
}
// remove from local storage
function removeFromLocalStorage(id){
    let items = getLoaclStorage()
    
    items=items.filter(item=>{
        if(item.id !== id){
            return item
        }
    })
    localStorage.setItem('list',JSON.stringify(items))
}
//edit local storage
function editLocalStorage(id, value){
    let items = getLoaclStorage()
    items=items.map(item=>{
        if(item.id===id){
            item.value=value
        }
        return item
    })
    localStorage.setItem('list', JSON.stringify(items))
}
function getLoaclStorage(){
    return   localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : []
}

// ****** SETUP ITEMS **********
function setupItems(){
    let items=getLoaclStorage()
    if (items.length > 0){
        items.forEach(item=>{
            createListItems(item.id, item.value)

        })
        container.classList.add('show-container')
    }
}

function  createListItems(id, value){
    const element=document.createElement('article')
        element.classList.add('grocery-item') // add class
        // add id
        const attr=document.createAttribute('data-id')
        attr.value=id
        element.setAttributeNode(attr)
        element.innerHTML=`<p class="title">${value}</p>
        <div class="btn-container">
          <button class="edit-btn" type="button">
            <i class="fas fa-edit"></i>
          </button>
          <button class="delete-btn" type="button">
            <i class="fas fa-trash"></i>
          </button>
        </div>`
        const deleteBtn=element.querySelector('.delete-btn')
        const editBtn = element.querySelector('.edit-btn')
        deleteBtn.addEventListener('click',deleteItem)
        editBtn.addEventListener('click',editItem)
        // apend child
        list.appendChild(element)
}