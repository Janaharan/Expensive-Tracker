export let spentExpensive = JSON.parse(localStorage.getItem('spent')) || [];



export function spentUpdate( spentTitle ,spentAmount){
    let spentTitleVal = spentTitle.value.trim();
    let spentAmountVal = parseFloat(spentAmount.value);

    if (spentTitleVal === "" || spentTitleVal.length === 0) {
    alert("please enter a valid title");
    return false;
    } else if (spentTitleVal.length > 50) {
    alert("title is too long. Please enter the title with fewer words");
    return false;
    } else if (isNaN(spentAmountVal)) {
    alert("please enter a valid amount");
    return false;
    } else if (spentAmountVal < 0) {
    alert("enter the positive Number");
    return false;
    } else if (
    spentExpensive.some(
        (expense) => expense.name.toLowerCase() === spentTitleVal.toLowerCase()
    )
    ) {
    alert("Expense title already exists. Please enter a unique title");
    return false;
    } else {
    spentExpensive.push({
        name: spentTitleVal,
        price: spentAmountVal,
    });
    addSpentStorage()
    }
};

export function addSpentStorage(){
    localStorage.setItem("spent",JSON.stringify(spentExpensive));
}