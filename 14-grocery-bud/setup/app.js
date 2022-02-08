// ****** SELECT ITEMS **********
   const groceryContainer = document.querySelector('.grocery-container');
   const alertEl = document.querySelector('.alert');
   const clearBtn = document.querySelector('.clear-btn');
   const groceryList = document.querySelector('.grocery-list');
   const submitBtn = document.querySelector('.submit-btn');
   const edBtn = document.querySelector('.ed-btn');

   let wishList = [];
   let timeoutID;
   let editIndex;

// ****** EVENT LISTENERS **********

submitBtn.addEventListener('click', () => {
   const userInput = document.querySelector('#grocery').value;
   if (!userInput) {
      manageAlertMessage(`Please Enter Value`, `alert-danger`);
   } else {
      manageAlertMessage(`Item Added To The List`, `alert-success`);
      wishList.push(userInput);
   }
   displayItems();
   document.querySelector('#grocery').value = '';
})

clearBtn.addEventListener('click', () => {
   wishList = [];   
   localStorage.clear();
   displayItems();
   timeoutID = setTimeout(() => {
      clearBtn.style.visibility = "hidden";
   }, 200);
   manageAlertMessage(`Empty List`, `alert-danger`);
   setDefaults();
})

groceryList.addEventListener('click', (e) => {
   const neededText = e.target.parentElement
      .parentElement
      .parentElement
      .querySelector('.title')
      .innerHTML;

   if (e.target.classList.contains('fa-trash')) {
      manageDelete(neededText);
   } else if (e.target.classList.contains('fa-edit')) {
      manageEdit(neededText);
   }
})

// button that submits edition changes
edBtn.addEventListener('click', () => {
   const userInput = document.querySelector('#grocery').value;
   wishList[editIndex] = userInput;
   displayItems();
   document.querySelector('#grocery').value = '';
   manageAlertMessage(`Value Changed`, `alert-success`);
   setDefaults();
})

// ****** FUNCTIONS **********

const hideAlert = () => {
   alertEl.classList.remove('alert-danger');
   alertEl.classList.remove('alert-success');
   alertEl.innerHTML = "";
}

const manageAlertMessage = (msg, elClass) => {
   alertEl.innerHTML = msg;
   alertEl.classList.add(elClass);
   timeoutID = setTimeout(hideAlert, 1000);
}

// also updates the local storage content
// and sets some styling to display items properly 
function displayItems() {

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

   localStorage.setItem('wishList', JSON.stringify(wishList));

   if (!groceryContainer.classList.contains('show-container') 
      && wishList.length > 0) {
      groceryContainer.classList.add('show-container');
   }
   if (wishList.length > 0) {
      clearBtn.style.visibility = "visible";
   } else if (wishList.length <= 0) {
      clearBtn.style.visibility = "hidden";
   }
//end of displayItems()
}

const manageDelete = (key) => {
   const index = wishList.indexOf(key);
   wishList.splice(index, 1);
   displayItems();
   manageAlertMessage(`Item Removed`, `alert-danger`);
   setDefaults();
}

const manageEdit = (key) => {
   editIndex = wishList.indexOf(key);
   document.querySelector('#grocery').value = key;
   substitute(edBtn, submitBtn);
}

const substitute = (show, hide) => {
   hide.style.display = "none";
   show.style.display = "block";
}

const setDefaults = () => {
   substitute(submitBtn, edBtn);
   document.querySelector('#grocery').value = '';
}

// ****** LOCAL STORAGE **********
window.onload = function() {
   wishList = JSON.parse(localStorage.getItem('wishList'));
   displayItems();
}
