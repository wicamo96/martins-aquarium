// Import the function that returns a copy of the locations array
import { getLocations } from "../database.js";

// Invoke the imported function
const allLocations = getLocations()

// Export a function that formats the locations info into html
export const locationList = () => {
    // Initialize a variable to begin formatting a string with html tags
    let htmlString = "";

    // Create HTML representations of each location here
    for (const location of allLocations) {
        // Build location card
        htmlString += `<div class=location>
            <div><strong>Fish harvested here:</strong> ${location.name}</div>
            <br>
            <div>${location.quote}</div>
            <br>
            <div>${location.location}</div>
        </div>`;
    }
    return htmlString;
}