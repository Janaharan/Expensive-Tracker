let totalSpentElem = document.querySelector(".totalSpent");
let totalGainElem = document.querySelector(".totalGain");
let totalBalElem = document.querySelector(".totalBal");

export default function updateTotals(spentExpensive,gainExpensive) {
    let totalSpent = 0;
    let totalGain = 0;

    // Calculate the total amount spent
    spentExpensive.forEach((spent) => {
        totalSpent += spent.price;
    });

    // Calculate the total amount gained
    gainExpensive.forEach((gain) => {
        totalGain += gain.price;
    });

    // Calculate the total balance
    let totalBal = totalGain - totalSpent;

    // Update the totals in the HTML
    totalSpentElem.innerHTML = `Total Spent: ₹${totalSpent}`;
    totalGainElem.innerHTML = `Total Gain: ₹${totalGain}`;
    totalBalElem.innerHTML = `Total Balance: ₹${totalBal}`;
}