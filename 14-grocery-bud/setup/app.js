// ****** SELECT ITEMS **********
const alert=document.querySelector('.alert')
const form=document.querySelector('.grocery-form')
const grocery=document.getElementById('grocery')
const submitBtn=document.querySelector('.submit-btn')
const container=document.querySelector('.grocery-container')
const list=document.querySelector('.grocery-list')
const clearBtn=document.querySelector('.clear-btn')

// edit option
let editElement
let editFlag=false
let editId=""
// ****** EVENT LISTENERS **********
// submit form
form.addEventListener('submit',addItem)
// clear items
clearBtn.addEventListener('click',clearItems)
// load items
window.addEventListener('DOMContentLoaded', setupItems)
