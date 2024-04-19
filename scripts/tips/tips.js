// Import the function that returns a copy of the tips array
import { getTips } from "../database.js";

// Invoke the imported function
const allTips = getTips()

// Export a function that formats the tips info into html
export const tipList = () => {
    // Initialize a variable to begin formatting a string with html tags
    let htmlString = `<header><strong>Martin's Tank Keeping Tips:</strong></header>`;

    // Create html representation of each tip
    for (const tip of allTips) {
        // Build out tips with a <p> tag for title and <div> tag for description
        htmlString += `<p>${tip.title}</p>
                        <div>${tip.description}</div>`;
    }

    return htmlString
}