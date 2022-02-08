// ****** SELECT ITEMS **********
   const alertEl = document.querySelector('.alert');
// edit option

// ****** EVENT LISTENERS **********
document.querySelector('.submit-btn').addEventListener('click', () => {
   const userInput = document.querySelector('#grocery').value;
   if (!userInput) {
      alertEl.innerHTML = "Please Enter Value";
      alertEl.classList.add('alert-danger');
      const timeoutHide = setTimeout(hideAlert, 1000);
   }


   console.log('hello');
})

// ****** FUNCTIONS **********

const hideAlert = () => {
   alertEl.classList.remove('alert-danger');
   alertEl.innerHTML = "";
}
// const timeoutHide = setTimeout(hideAlert, 2000);

// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
