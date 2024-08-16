import { spentUpdate, spentExpensive , addSpentStorage} from "../expensiveData/spentExpensive.js";
import { gainUpdate, gainExpensive , addGainStorage } from "../expensiveData/gainExpensive.js";
import updateTotals from "../calculation/calculation.js";

//DOM Elements
let spentTitle = document.querySelector(".spentTitle");
let spentAmount = document.querySelector(".spentAmount");
let resultForSpent = document.querySelector(".resultForSpent");
let spentBtn = document.querySelector(".spentBtn");

let gainTitle = document.querySelector(".gainTitle");
let gainAmount = document.querySelector(".gainAmount");
let resultForGain = document.querySelector(".resultForGain");
let gainBtn = document.querySelector(".gainBtn");

//EventListener
spentBtn.addEventListener("click", () => {
  spentUpdate(spentTitle, spentAmount);
  addSpentHTML();
  updateTotals(spentExpensive,gainExpensive);

  spentTitle.value = "";
  spentAmount.value = "";
});

gainBtn.addEventListener("click", () => {
  gainUpdate(gainTitle, gainAmount);
  addGainHTML();
  updateTotals(spentExpensive,gainExpensive);

  gainTitle.value = "";
  gainAmount.value = "";
});

//Adding the HTML from the data
function addSpentHTML() {
  resultForSpent.innerHTML = "";

  spentExpensive.forEach((spent,index) => {
    let list = document.createElement("li");
    list.className = "resultList";
    let button = document.createElement('button');
    button.classList = 'delBtn';
    button.innerHTML = 'X';
    button.setAttribute('data-index', index);
    list.innerHTML = `${index + 1} . ${(spent.name).charAt(0).toUpperCase() + spent.name.slice(1)} - ₹${spent.price} <i class="fa-solid fa-circle-minus"></i>`;
    list.append(button);
    resultForSpent.append(list);
  });
}
addSpentHTML()

resultForSpent.addEventListener('click', function(e) {
  if (e.target.classList.contains('delBtn')) {
    const index = parseInt(e.target.getAttribute('data-index')); // Convert to number
    // Handle deletion of the item at the given index
    let askToDel = confirm('Are you Sure to delect?');
    if(askToDel){
    spentExpensive.splice(index, 1);
    addSpentStorage();
    addSpentHTML();
    updateTotals(spentExpensive, gainExpensive);
    }else{
      return
    }
  }
});



function addGainHTML() {
  resultForGain.innerHTML = "";
  gainExpensive.forEach((gain,index) => {
    let list = document.createElement("li");
    let button = document.createElement('button');
    button.classList = 'delBtn';
    button.innerHTML = 'X';
    button.setAttribute('data-index', index);
    list.className = "resultList";
    list.innerHTML = `${index + 1} . ${(gain.name).charAt(0).toUpperCase() + gain.name.slice(1)} - ₹${gain.price} <i class="fa-solid fa-circle-plus"></i>`;
    resultForGain.append(list);
    list.append(button);
  });
}
addGainHTML()

resultForGain.addEventListener('click',function(e){
  if(e.target.classList.contains('delBtn')){
    const index = parseInt(e.target.getAttribute('data-index'));
    let askToDel = confirm("Are you Sure to Delect?");
    if(askToDel){
      gainExpensive.splice(index, 1);
      addGainStorage();
      addGainHTML();
      updateTotals(spentExpensive,gainExpensive);
    }else{
      return
    }
    
  }
})

//clear the values
let clear = document.querySelector(".clearBtn");
clear.addEventListener('click',()=>{
  spentExpensive.length = 0 ;
  gainExpensive.length = 0;
  addSpentStorage();
  addGainStorage();
  addSpentHTML();
  addGainHTML();
  updateTotals(spentExpensive,gainExpensive);

});
updateTotals(spentExpensive,gainExpensive);