const filterBox = document.querySelectorAll('.products');

document.querySelector('.nav').addEventListener('click', (event) =>{
    if(event.target.tagName !== 'li' ) return false;

    let filterClass = event.target.dataset['f'];
    console.log(filterClass);
})