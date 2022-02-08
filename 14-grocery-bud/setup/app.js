// ****** SELECT ITEMS **********
   const groceryContainer = document.querySelector('.grocery-container');
   const alertEl = document.querySelector('.alert');
   const wishList = [];


   let timeoutHide;
// edit option

// ****** EVENT LISTENERS **********
document.querySelector('.submit-btn').addEventListener('click', () => {
   const userInput = document.querySelector('#grocery').value;
   if (!userInput) {
      alertEl.innerHTML = "Please Enter Value";
      alertEl.classList.add('alert-danger');
      timeoutHide = setTimeout(hideAlert, 1000);
   } else {
      alertEl.innerHTML = "Item Added To The List";
      alertEl.classList.add('alert-success');
      timeoutHide = setTimeout(hideAlert, 1000);
      wishList.push(userInput);
      displayItems();
   }

})

// ****** FUNCTIONS **********

const hideAlert = () => {
   alertEl.classList.remove('alert-danger');
   alertEl.classList.remove('alert-success');
   alertEl.innerHTML = "";
}
function displayItems() {
   const groceryList = document.querySelector('.grocery-list');
   const listItems = wishList.map(item => `
      <article class="grocery-item">
         <p class="title">${item}</p>
         <div class="btn-container">
            <button type="button" class="edit-btn">
               <i class="fas fa-edit"></i>
            </button>
            <button type="button" class="delete-btn">
               <i class="fas fa-trash"></i>
            </button>
         </div>
      </article>
   `).join('');
   groceryList.innerHTML = listItems;
   if (!groceryContainer.classList.contains('show-container')) {
      groceryContainer.classList.add('show-container');
   }
}




// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
