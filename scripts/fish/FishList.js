// Import the function that returns a copy of the fish array
import { getFish } from "../database.js";

// Invoke the function that you imported from the database module
const allFish = getFish();

export const FishList = () => {
    // Start building a string filled with HTML syntax
    let htmlString = "<section class='fishList'>";

    // Create HTML representations of each fish here
    for (const fish of allFish) {
        // Build fish cards with HTML tags
        htmlString += `<div class='fish'>
            <div><img class='fishImg' ${fish.image}></div>
            <div class='fishName'> ${fish.name}</div>
            <div class='fishSpecies'>${fish.species}</div>
            <div class='fishLength'>${fish.length} ${fish.units}</div>
            <div class='fishLocation'>${fish.location}</div>
            <div class='fishDiet'>${fish.food}</div>
        </div>`;
    }
    htmlString += `</section>`;

    return htmlString;
}

// Function that tests if fish length is divisible by 3 (inches)
export const mostHolyFish = () => {
    // Initialize an array for fish % 3 === 0
    const holyFish = [];

    // Test each fish
    for (const fish of allFish) {
        // Store each fishes length in the length variable to test later
        let length = fish.length;
        
        // If fish length measured in feet, convert to inches by multiplying by 12
        if (fish.units === "feet") {
            length *= 12;
            
            // If their length is divisible by 3 with no remainder, add to the holy fish array
            if (length % 3 === 0) {
                holyFish.push(fish);
            }
        }
        // If the fish unit is measured in inches, test same as above
        else if (length % 3 === 0) {
            holyFish.push(fish);
        }
        
    }
    // Return holyFish array to be used in the htmlMachine function
    return holyFish;
}

// Function that tests if a fish length is divisible by 5 (inches)
export const soldierFish = () => {
    // Initialize an array to store those that are divisible by 5
    const soldierFish = [];

    for (const fish of allFish) {
        // Store each fishes length in the length variable to test later
        let length = fish.length;

        // If fish length measured in feet, convert to inches by multiplying by 12 
        if (fish.units === "feet") {
            length *= 12;
            
            // If their length is divisible by 5 with no remainder, add to the soldier fish array
            if (length % 5 === 0 && length % 3 !== 0) {
                soldierFish.push(fish);
            }
        }

        // If the fish unit is measured in inches, test same as above
        else if (length % 5 === 0 && length % 3 !== 0) {
            soldierFish.push(fish);
        }
    }
    // Return soldierFish array to be used in the htmlMachine function
    return soldierFish;
}

// Function that tests if the fish are not divisible by 3 or 5
export const nonHolyFish = () => {
    const nonHolyFish = [];

    for (const fish of allFish) {
        let length = fish.length;

        if (fish.units === "feet") {
            length *= 12;

            if (length % 3 !== 0 && length % 5 !== 0) {
                nonHolyFish.push(fish);
            }
        }

        else if (length % 3 !== 0 && length % 5 !== 0) {
            nonHolyFish.push(fish);
        }
    }
    return nonHolyFish;
}

// Create HTML for whichever filter is selected (holy, soldier, or non)
export const htmlMachine = (fishFunction) => {
    // Build array from whichever filter item is selected
    const fishArray = fishFunction();

    // Create a variable to build HTML
    let htmlString = "<section class='fishList'>";

    // Build fish cards with HTML tags for each fish
    for (const fish of fishArray) {
            htmlString += `<div class='fish'>
                <div><img class='fishImg' ${fish.image}></div>
                <div class='fishName'> ${fish.name}</div>
                <div class='fishSpecies'>${fish.species}</div>
                <div class='fishLength'>${fish.length} ${fish.units}</div>
                <div class='fishLocation'>${fish.location}</div>
                <div class='fishDiet'>${fish.food}</div>
            </div>`;
    }
    htmlString += `</section>`;
    
    return htmlString;
}
