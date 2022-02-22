"use strict";

let destinationChoices = ["Washington, D.C.","Philadelphia","Annapolis","Ocean City","Richmond","New York City"];
let restaurantChoices = ["McDonald's","Applebee's","Cheesecake Factory","Outback Steakhouse","Red Lobster"];
let transportationChoices = ["Car","Bus","Train","Plane"]
let entertainmentChoices = ["Museum","Historical Landmark","Live Band","Pub Crawl","Sporting Event","Wine Tasting","Dog Show"]
let tripChoices = [];

function randomChoice(arr,optionType){
    let chooseOption = Math.floor(Math.random() * arr.length);
    let optionIndex = chooseOption;
    let optionChoice = `${optionType}: ${arr[chooseOption]}`;    
    tripChoices.push = (optionChoice);
    return optionChoice;
}

let destination = randomChoice(destinationChoices,"Destination");  
let restaurant = randomChoice(restaurantChoices,"Restaurant");
let transportation = randomChoice(transportationChoices,"Transportation");
let entertainment = randomChoice(entertainmentChoices,"Entertainment");

console.log(`Your random trip:\n ${destination}\n ${restaurant}\n ${transportation}\n ${entertainment}`);

let tripApproval = prompt("Do you like this trip?");
