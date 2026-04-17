/**
 * UNO Game Treat Calculator
 * Determines who gives a treat based on total wins over three days.
 * 
 * Friends: Jack, John, Mahesh
 * Note: John was absent on Day 2.
 */

// wins[day][personIndex]
// personIndex: 0 = Jack, 1 = John, 2 = Mahesh
const winsPerDay = [
    [5, 4, 3], // Day 1: [Jack, John, Mahesh]
    [6, 0, 10], // Day 2: [Jack, John (Absent), Mahesh]
    [4, 20, 5]  // Day 3: [Jack, John, Mahesh]
];

const names = ["Jack", "John", "Mahesh"];

function determineTreatGiver(wins) {
    let totalWins = [0, 0, 0];

    // Calculate total wins for each friend
    for (let day = 0; day < wins.length; day++) {
        for (let friend = 0; friend < names.length; friend++) {
            totalWins[friend] += wins[day][friend];
        }
    }

    // Display total wins
    console.log("--- Total Wins After 3 Days ---");
    names.forEach((name, index) => {
        console.log(`${name}: ${totalWins[index]} wins`);
    });

    // Determine the person with the least wins
    let minWins = Math.min(...totalWins);
    let loserIndex = totalWins.indexOf(minWins);

    console.log("\n-------------------------------");
    console.log(`Treat Giver: ${names[loserIndex]}! 🍕`);
    console.log("-------------------------------");
    
    return names[loserIndex];
}

// Run the calculation
determineTreatGiver(winsPerDay);
