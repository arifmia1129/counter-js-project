let count = 0;

function updateCounter() {
    document.getElementById("counter").innerText = count;
}
function increaseDecreaseValue(isAdd) {
    if (isAdd == true) {
        count++;
    }
    else {
        if (count > 0) {
            count--;
        }
    }
}

document.getElementById("add-btn").addEventListener("click", function () {
    increaseDecreaseValue(true);
    updateCounter();
})
document.getElementById("sub-btn").addEventListener("click", function () {
    increaseDecreaseValue(false);
    updateCounter();
})