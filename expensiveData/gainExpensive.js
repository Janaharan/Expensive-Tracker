export let gainExpensive = JSON.parse(localStorage.getItem('gain')) || [];

export function gainUpdate(gainTitle , gainAmount){

    let gainTitleVal = gainTitle.value.trim();
    let gainAmountVal = parseFloat(gainAmount.value);

  if (isNaN(gainAmountVal)) {
    alert("please enter the valid amount");
    return false;
  } else if (gainTitleVal > 50) {
    alert("title is too long. Please enter the title with fewer words");
    return false;
  } else if (gainTitleVal === "" || gainTitleVal.length === 0) {
    alert("please enter a valid title");
    return false;
  } else if (gainAmountVal < 0) {
    alert("enter the positive Number");
    return false;
  } else if (
    gainExpensive.some(
      (expense) => expense.name.toLowerCase() === gainTitleVal.toLowerCase()
    )
  ) {
    alert("Expense title already exists. Please enter a unique title");
    return false;
  } else {
    gainExpensive.push({
      name: gainTitleVal,
      price: gainAmountVal,
    });
    addGainStorage()
  };
}

export function addGainStorage(){
  localStorage.setItem("gain",JSON.stringify(gainExpensive));
}