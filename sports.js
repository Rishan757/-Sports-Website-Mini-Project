const sportsElements = document.querySelectorAll(".sports-element");
// console.log(sportsElements);

setInterval(() => {
    let currentElement = document.querySelector(".current");
    currentElement.classList.remove("current");

    if (currentElement.nextElementSibling) {
        currentElement.nextElementSibling.classList.add("current");
    } else {
        sportsElements[0].classList.add("current");
    }
}, 2000);
