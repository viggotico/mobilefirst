document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('menu-icon').addEventListener('click', function() {
        const mobilMenu = document.getElementById('menu-list');
        mobilMenu.classList.toggle('show');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('menu-icon').addEventListener('click', function() {
        const mobilMenu = document.getElementById('menu-list');
        mobilMenu.classList.toggle('show');
    });
});

// Navigation submenu

const subMenues = document.querySelectorAll(".sub-menu");
const subMenueDivs = document.querySelectorAll(".sub-menu div");
subMenues.forEach((subMenuContainer) => {
    const subMenu = subMenuContainer.children[1];
    subMenuContainer.addEventListener("mouseover", () => {
        subMenu.style.display = "flex";
        subMenu.classList.toggle("sub-menu-show");
    });
    subMenuContainer.addEventListener("mouseout", () => {
        if (subMenu.classList.contains("sub-menu-show")) {
            subMenu.classList.toggle("sub-menu-show");
            setTimeout(() => {
                if (subMenu.classList.contains("sub-menu-hovered")) {
                    return;
                }
                subMenu.style.display = "none";
            }, 1000);
        }
    });
});
subMenueDivs.forEach((subMenuDiv) => {
    subMenuDiv.addEventListener("mouseover", () => {
        subMenuDiv.classList.toggle("sub-menu-hovered");
        subMenuDiv.style.display = "flex";
    });
    subMenuDiv.addEventListener("mouseout", () => {
        subMenuDiv.classList.toggle("sub-menu-hovered");
        subMenuDiv.classList.toggle("sub-menu-show");
    });
});

const prices = [];
const cards = document.querySelectorAll(".find-pris-kategorier li");
var estPrice = document.querySelector(".find-pris-est-pris p");
var minPrice = 0;

const fravælgButton = document.getElementById("find-pris-est-pris-button-fravælg");
const fortsætButton = document.getElementById("find-pris-est-pris-button-fortsæt");

fravælgButton.addEventListener("click", () => {
    cards.forEach(card => {
        if (card.classList.contains('selected')) {
            card.click();
        }
    });
});

fortsætButton.addEventListener("click", () => {
    alert("lader som om vi fortsætter til næste side...");
});

cards.forEach((card, i) => {
    getCardData(card, i, false);
    card.addEventListener("click", () => {
        getCardData(card, i, true);
    });
});

function getCardData(card, i, toggleCard) {
    if (toggleCard) {
        card.classList.toggle("selected");
    }
    if (card.classList.contains('selected')) {
        var priceRange = card.children[1].innerHTML.split(' - ');
        var realPrice = priceRange.length > 1 ? gennemsnit(priceRange).toString() : parseFloat(priceRange[0].replace(/\D/g,'').toString());
        var currentMinPrice = priceRange[0].replace(/\D/g,'');
        var currentMaxPrice = priceRange.length > 1 ? priceRange[1].replace(/\D/g,'') : 0;
        minPrice += parseFloat(currentMinPrice);
        prices.push({
            id: i,
            value: realPrice,
            minValue: currentMinPrice,
            maxValue: currentMaxPrice
        });
    }
    else {
        prices.forEach((item, index) => {
            if (item.id === i) {
                prices.splice(index, 1);
                minPrice = Math.abs(minPrice - parseFloat(item.minValue));
                console.log(item.minValue);
                return;
            }
        });
    }

    var estimatedPrice = 0;
    prices.forEach(price => {
        estimatedPrice += parseFloat(price.value);
    });
    if (prices.length > 0) {
        estPrice.innerHTML = "DKK " + minPrice.toString() + " - " + numberWithCommas(estimatedPrice).toString() + ",-";
    }
    else {
        estPrice.innerHTML = "DKK " + numberWithCommas(estimatedPrice).toString() + ",-";
    }
}

function gennemsnit(arr) {
    var number = 0;
    arr.forEach(n => {
        number += parseFloat(n.replace(/\D/g,''));
    });
    return (number / 2);
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}