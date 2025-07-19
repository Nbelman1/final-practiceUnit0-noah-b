/* PSEUDOCODE FOR PROGRAM
Gather user info
    Ask the user if they want to input current experience or current level
    Ask user to enter current experience / level as an int  
        Use if-else to determine if experience / level is valid 
            Display error message if invalid 
    Ask user if their goal is in experience or a level format
        This will determine how our experience/level table will be used later on
    Ask user to enter their desired goal as int
    Display types of logs and experience per log
        Ask user which tree they will be cutting
        Store input as string (ie "yew" or "willow", etc.)
    Ask user if they are using a woodcutting boost (boolean)
        If yes, is user using an aura? (boolean)
            Display different auras, prompt user to select which one
        If yes, is user using an outfit? (boolean)
            Display different outfits, prompt user to select which one 
        If no, break  
Run calculations
    If user listed levels, convert them to experience (There is a logarithmic function to do this,
        but to keep things simple, we will refer to a multi-dimensional array)
    Subtract current experience from desired experience to get experience needed
    Refer to tree-experience array to determine experience per log
    Divide experience needed by experience per log
Display outputs
    Output result as total logs needed
 */

const input = require('readline-sync');

// --- BUILDING ARRAYS ---
const logExpTable = [ // format is [log type, experience per log]
    ["logs", 25],
    ["oak", 37.5],
    ["willow", 67.5],
    ["teak", 85],
    ["maple", 100] // there are many more log types but this gets the point across 
];

const expLevelTable = [ // format is [level, experience needed]
    [2, 83],
    [3, 174],
    [4, 276], 
    [5, 388], // skipping some levels
    [97, 10692629], 
    [98, 11805606],
    [99, 13034431]
];

// --- VALUES AND DATA TYPES ---
let experienceOrLevel; // to store user's input as a string
    experienceOrLevel = input.question("Are you entering your current 'experience' or current 'level'?");
let currentExperience; // to store user's experience as an int
    currentExperience = input.questionInt("Input your current woodcutting experience: ");
let currentLevel; // to store user's level as an int
    currentLevel = input.questionInt("Input your current woodcutting level: ");
let isCurrentInputValid; // boolean
let logType; // string
let experiencePerLog; // int
let desiredExperience; // int
    desiredExperience = input.questionInt("Input your desired woodcutting experience :");
let desiredLevel; // int
    desiredLevel = input.questionInt("Input your desired woodcutting level: ");
let isDesiredInputValid; // boolean
let usingBoost; // boolean
let usingAura; // boolean
let usingOutfit; // boolean
let totalLogsNeeded; // int 

// --- USING ARRAYS ---
// convert log type to experience per log
if (logType === "logs") {
    experiencePerLog = logExpTable[0][1];
} else if (logType === "oak logs") {
    experiencePerLog = logExpTable[1][1];
} else if (logType === "willow logs") {
    experiencePerLog = logExpTable[2][1];
}
// convert current level to current experience using indices and expLevelTable
if (experienceOrLevel === "level" && currentLevel != "") {
    currentExperience = expLevelTable[currentLevel - 1][1];
}


// --- CONTROL STRUCTURES AND LOGIC ---
if ((experienceOrLevel === "level") && (1 > level > 99)) { // outputs error message if user's input is invalid
    console.log("Level should be between 1 and 99. Please try again.");
} else {
    isCurrentInputValid = true;
}

// --- WORKING WITH LOOPS --- 
// display log types for user to select by iterating through array
for (i = 0; i < logExpTable.length; i++) {
    console.log(`Experience per ${logExpTable[i][0]} log: ${logExpTable[i][1]}`);
}

// --- OPERATIONS ---
let experienceNeeded = desiredExperience - currentExperience;
totalLogsNeeded = experienceNeeded / experiencePerLog;

//  --- STRINGING CHARACTERS TOGETHER ---
// using array literals to display program outputs
console.log(`To reach ${desiredLevel}, you'll need to cut ${totalLogsNeeded} ${logType}.`);
console.log(`To reach ${desiredExperience}, you'll need to cut ${totalLogsNeeded} ${logType}.`);
