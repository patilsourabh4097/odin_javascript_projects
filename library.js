const myForm = document.querySelector('#my-form')
const bookName = document.querySelector('#name')
const author = document.querySelector('#author')
const pages = document.querySelector('#pages')
const msg = document.querySelector('.msg')
const bookList = document.querySelector('#books')


myForm.addEventListener('submit', onSubmit);


function onSubmit(e){
    e.preventDefault();

    // form validation

if(bookName.value === '' || author.value === '' || pages.value === ''){
    msg.classList.add('error')                                                  // to show error
    msg.innerHTML = 'PLease enter all fields';                                  // modern way

    setTimeout( () => msg.remove(), 3000)                                       // to disappear msg after some time....3000 is millisec
}
else{
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(` ${bookName.value} by ${author.value} with ${pages.value} pages`))

    bookList.appendChild(li);

 
}

}