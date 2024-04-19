const database = {
    fish: [
        {
            id: 1,
            image: "src='https://i0.wp.com/exoticfishshop.net/wp-content/uploads/2024/03/exoticfishshop.com-arapaima-giga-05.jpg?fit=100%2C100&ssl=1' alt='Photo of Arapaima gigas'",
            name: "George",
            species: "arapaima gigas",
            length: 10,
            units:  "feet",
            location: "Harvested in Bolivia",
            food: "Primarily feeds on other fish, although juveniles prefer insects and fish larvae until fully grown"
        },
        {
            id: 2,
            image: "src='https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTQ26K3u5g82AV65yL7Mboufj0fnORikE4V3j08AcAxguy_yMhYeO-OcggK4QgBdEJDeVtW3NaQYQdbblg' alt='Photo of Zebra Angelfish'",
            name: "Jimbo",
            species: "Zebra lyretail",
            length: 10,
            units: "inches",
            location: "Red Sea",
            food: "Zooplankton",
        },
        {
            id: 3,
            image: "src='https://dwazoo.com/wp-content/uploads/2013/12/Pot-belly-2.png' alt='Photo of Photo of a Pot-Bellied Seahorse'",
            name: "Seabiscuit",
            species: "Hippocampus Abdominalis",
            length: 14,
            units: "inches",
            location: "Australia",
            food: "Crustaceans",
        },
        {
            id: 4,
            image: "src='https://dwazoo.com/wp-content/uploads/2013/12/Napoleon-wrasse.png' alt='Photo of Napoleon Wrasse'",
            name: "Napoleon Complex",
            species: "Cheilinus Undulatus",
            length: 7,
            units: "feet",
            location: "Hawaii",
            food: "Shellfish, other fish, sea stars, sea urchins, crabs",
        },
        {
            id: 5,
            image: "src='https://dwazoo.com/wp-content/uploads/2013/12/Moorish-idol.png' alt='Photo of Moorish Idol'",
            name: "Gill",
            species: "Zanclus Cornutus",
            length: 9,
            units: "inches",
            location: "Red Sea",
            food: "Corals, sponges, tunicates, and other benthic invertebrates",
        },
        {
            id: 6,
            image: "src='https://dwazoo.com/wp-content/uploads/2013/12/Carberryi-anthias.png' alt='Photo of Carberryi Anthias'",
            name: "Tangelo",
            species: "Nemanthias Carberryi",
            length: 3,
            units: "inches",
            location: "Western Indian Ocean",
            food: "Zooplankton and floating algae",
        },
        {
            id: 7,
            image: "src='https://dwazoo.com/wp-content/uploads/2013/12/Eschmeyers-scorpionfish.png' alt='Photo of Eschmeyer's Scorpionfish'",
            name: "Rhino",
            species: "Rhinopias Eschmeyeri",
            length: 7.5,
            units: "inches",
            location: "Sri Lanka",
            food: "Crustaceans, cephalopods, and small fish",
        },
        {
            id: 8,
            image: "src='https://dwazoo.com/wp-content/uploads/2013/12/Leafy-seadragon-1.png' alt='Photo of Leafy Seadragon'",
            name: "Toothless",
            species: "Phycodurus Eques",
            length: 18,
            units:  "inches",
            location: "Australia",
            food: "Mysid shrimp, small crustaceans, plankton, and larval fish",
        }
    ],
    tips: [
        {
            id: 1,
            title: "Fish Feeding:",
            description: "Fish don’t have stomachs, so they never know when to stop eating. When feeding your fish, only feed it as much as it will eat in two or three minutes once or twice per day. Some types of fish, like goldfish, should only be fed as much as they can eat in one minute, while other types have different requirements. Overfeeding is one of the most common mistakes fish owners make."
        },
        {
            id: 2,
            title: "Temperature Maintenance:",
            description: "Water temperature must remain consistent to prevent illness in fish, especially in saltwater aquariums. For reliable measurements, use a submerged or digital thermometer, not an external one. The temperature inside a saltwater aquarium can range from 73 to 84 degrees Fahrenheit, but the ideal temperature for your tank depends on the fish and plant life inside. Once an acceptable temperature is reached, maintaining a consistent temperature inside a saltwater aquarium is crucial in preventing illnesses in fish and diseases in plants."
        },
        {
            id: 3,
            title: "Salinity Maintenance:",
            description: "Water evaporates from a tank on a regular basis, meaning this vaporized water must be replaced. Keep in mind that water evaporates, but the salt inside the tank does not. Because of this, only freshwater should be used to top off the water in a saltwater tank. When topping off your tank, use reverse osmosis water to provide the purest water possible for your aquatic life."
        },
        {
            id: 4,
            title: "Tank Cleaning:",
            description: "Aquariums require regular water changes and pH testing in order to ensure fish are living in the proper conditions. Depending on the size of the aquarium and filtration system you have set up, you’ll need to perform weekly partial water replacement, as well as clean the tank and change the water about once per month."
        },
    ],
    locations: [
        {
            id: 1,
            name: "George",
            quote: `"La Paz, Bolivia, is the most extraordinary city." - Phil Keoghan`,
            location: "La Paz, Bolivia"
        },
        {
            id: 2,
            name: "Jimbo, Gill",
            quote: `"One of Earth’s major bodies of water, the Red Sea is a diving wonderland." - Fly and Sea Dive Adventures`,
            location: "Marsa Alam, Egypt"
        },
        {
            id: 3,
            name: "Seabiscuit, Toothless",
            quote: `"Scuba diving in the Great Barrier Reef should be on your bucket list if you are an avid scuba diver." - Dive in Australia`,
            location: "Cairns, Australia"
        },
        {
            id: 4,
            name: "Napoleon Complex",
            quote: `"Hawaii is beautiful, but below the water’s surface is a whole new world to discover." - World Adventurists`,
            location: "Oahu, Hawaii"
        },
        {
            id: 5,
            name: "Tangelo",
            quote: `"All year round, you can dive with huge schools of fusiliers, surgeons, batfish, trevallies, barracudas, green and hawksbill turtles, wrasse, and humphead parrotfish, to name a few." - Seacrush`,
            location: "Nosy Be Archipelago, Madagascar"
        },
        {
            id: 6,
            name: "Rhino",
            quote: `"[Passikudah] is one of the best diving sites in Sri Lanka that you must explore." - Wander On Experiences`,
            location: "Passikudah, Sri Lanka"
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}));
}

export const getTips = () => {
    return database.tips.map(tips => ({...tips}));
}

export const getLocations = () => {
    return database.locations.map(locations => ({...locations}));
}