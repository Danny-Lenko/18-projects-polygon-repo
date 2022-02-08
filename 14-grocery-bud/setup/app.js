// ****** SELECT ITEMS **********
   const groceryContainer = document.querySelector('.grocery-container');
   const alertEl = document.querySelector('.alert');
   const clearBtn = document.querySelector('.clear-btn');
   const groceryList = document.querySelector('.grocery-list');

   let wishList = [];
   let timeoutID;
// edit option

// ****** EVENT LISTENERS **********
document.querySelector('.submit-btn').addEventListener('click', () => {
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
})

clearBtn.addEventListener('click', () => {
   wishList = [];
   displayItems();
   timeoutID = setTimeout(() => {
      clearBtn.style.visibility = "hidden";
   }, 500);
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
      console.log('del');
   } else if (e.target.classList.contains('fa-edit')) {
      console.log('edit');
   } else {
      console.log(e.target)
   }

   console.log(neededText);
   console.log(wishList);
})



   // .forEach((item, index) => {
   //    const delBtn = item.querySelector('.delete-btn');
   
   //    delBtn.addEventListener('click', () => {
   //       wishList.splice(index, 1);
   //       // displayItems();
   //       return true;
   //       console.log(index);
   //    })
      
   // });


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
   // const groceryList = document.querySelector('.grocery-list');
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
   clearBtn.style.visibility = "visible";
}

const manageDelete = (key) => {
   const index = wishList.indexOf(key);
   wishList.splice(index, 1);
   displayItems();
}




// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
