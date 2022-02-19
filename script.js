"use strict";

let destinationChoices = ["Washington, D.C.","Philadelphia","Annapolis","Ocean City","Richmond","New York City"];
let restaurantChoices = ["McDonald's","Applebee's","Cheesecake Factory","Outback Steakhouse","Red Lobster"];
let transportationChoices = ["Car","Bus","Train","Plane"]
let entertainmentChoices = ["Museum","Historical Landmark","Live Band","Pub Crawl","Sporting Event","Wine Tasting","Dog Show"]

function randomChoice(arr,optionType){
    let chooseOption = Math.floor(Math.random() * arr.length);
    let optionIndex = chooseOption;
    console.log(`${optionType}: ${arr[chooseOption]}`);
}

randomChoice(destinationChoices,"Destination");
randomChoice(restaurantChoices,"Restaurant");
randomChoice(transportationChoices,"Transportation");
randomChoice(entertainmentChoices,"Entertainment");

