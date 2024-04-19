import { FishList } from "./fish/FishList.js";

import { mostHolyFish, soldierFish, nonHolyFish, htmlMachine } from "./fish/FishList.js";

import { tipList } from "./tips/tips.js";

import { locationList } from "./locations/locations.js";

let filter = document.getElementById('fishFilter');

const parentHTMLElement = document.querySelector("#insertFishList")

document.addEventListener("DOMContentLoaded", () => {
    parentHTMLElement.innerHTML = FishList();
})

document.addEventListener("change", () => {
    if (filter.value === "All") {
        parentHTMLElement.innerHTML = FishList();
        return;
    }
    else if (filter.value === "Holy") {
        parentHTMLElement.innerHTML = htmlMachine(mostHolyFish);
        return;
    }
    else if (filter.value === "Soldier") {
        parentHTMLElement.innerHTML = htmlMachine(soldierFish);
        return;
    }
    else if (filter.value === "NonHoly") {
        parentHTMLElement.innerHTML = htmlMachine(nonHolyFish);
        return;
    }
    else {
        parentHTMLElement.innerHTML = "You done messed up"
    }
})

const tipHTMLElement = document.querySelector("#aside")

tipHTMLElement.innerHTML = tipList()

const locationHTMLElement = document.querySelector("#locations")

locationHTMLElement.innerHTML += locationList()