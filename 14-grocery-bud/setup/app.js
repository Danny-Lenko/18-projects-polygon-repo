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
// edit option

// ****** EVENT LISTENERS **********
submitBtn.addEventListener('click', () => {
   const userInput = document.querySelector('#grocery').value;
   if (!userInput) {
      manageAlertMessage(`Please Enter Value`, `alert-danger`);
   } else {
      manageAlertMessage(`Item Added To The List`, `alert-success`);
      wishList.push(userInput);
      // displayItems();
   }
   displayItems();
   document.querySelector('#grocery').value = '';

   localStorage.setItem('wishList', JSON.stringify(wishList));
})

clearBtn.addEventListener('click', () => {
   wishList = [];   
   localStorage.clear();
   displayItems();
   localStorage.setItem('wishList', JSON.stringify(wishList));
   timeoutID = setTimeout(() => {
      clearBtn.style.visibility = "hidden";
   }, 200);
   manageAlertMessage(`Empty List`, `alert-danger`);
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

edBtn.addEventListener('click', () => {
   const userInput = document.querySelector('#grocery').value;
   wishList[editIndex] = userInput;
   displayItems();
   localStorage.setItem('wishList', JSON.stringify(wishList));
   document.querySelector('#grocery').value = '';
   manageAlertMessage(`Value Changed`, `alert-success`);
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
   if (!groceryContainer.classList.contains('show-container') 
      && wishList.length > 0) {
      groceryContainer.classList.add('show-container');
   }
   if (wishList.length > 0) {
      clearBtn.style.visibility = "visible";
   } else if (wishList.length <= 0) {
      clearBtn.style.visibility = "hidden";
   }
}

const manageDelete = (key) => {
   const index = wishList.indexOf(key);
   wishList.splice(index, 1);
   displayItems();
   localStorage.setItem('wishList', JSON.stringify(wishList));
   manageAlertMessage(`Item Removed`, `alert-danger`);
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

// ****** LOCAL STORAGE **********
window.onload = function() {
   wishList = JSON.parse(localStorage.getItem('wishList'));
   displayItems();
}
// ****** SETUP ITEMS **********
