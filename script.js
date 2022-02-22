"use strict";
function chooseDestination(){
    let destinationChoices = ["Washington, D.C.","Philadelphia","Annapolis","Ocean City","Richmond","New York City"];
    let finalDestination = destinationChoices[Math.floor(Math.random()*destinationChoices.length)];
    return finalDestination;
}
function chooseRestaurant(){
    let restaurantChoices = ["McDonald's","Applebee's","Cheesecake Factory","Outback Steakhouse","Red Lobster"];
    let finalRestaurant = restaurantChoices[Math.floor(Math.random()*restaurantChoices.length)];
    return finalRestaurant;
}

function chooseTransportation(){
    let transportationChoices = ["Car","Bus","Train","Plane"];
    let finalTransportation = transportationChoices[Math.floor(Math.random()*transportationChoices.length)];
    return finalTransportation;
}

function chooseEntertainment(){
    let entertainmentChoices = ["Museum","Historical Landmark","Live Band","Pub Crawl","Sporting Event","Wine Tasting","Dog Show"];
    let finalEntertainment = entertainmentChoices[Math.floor(Math.random()*entertainmentChoices.length)];
    return finalEntertainment;
}

let tripOptions = [chooseDestination(), chooseRestaurant(), chooseTransportation(), chooseEntertainment()];
let selectedDestination = tripOptions[0];
let selectedRestaurant = tripOptions[1];
let selectedTransportation = tripOptions[2];
let selectedEntertainment = tripOptions[3];

function tripSelections() {
    selectedDestination = chooseDestination();
    selectedRestaurant = chooseRestaurant();
    selectedTransportation = chooseTransportation();
    selectedEntertainment = chooseEntertainment();
    return selectedDestination, selectedRestaurant, selectedTransportation, selectedEntertainment;
}

function tripItinerary(){
    alert(`Your day trip will be as follows:\n Destination - ${selectedDestination}\n Restaurant - ${selectedRestaurant}\n Transportation - ${selectedTransportation}\n Entertainment - ${selectedEntertainment}`);
}

function keepOrChangeTrip() {
   let tripChoice = parseInt(prompt(`Enter 0 if you\'re happy with your trip\nEnter 1 to change destination\n Enter 2 to change restaurant\n Enter 3 to change transportation\n Enter 4 to change entertainment\n Enter 86 to change everything`));
    return tripChoice;
}

tripItinerary();

let tripchoiceValues = true

while (tripchoiceValues) {
    let travelersChoice = keepOrChangeTrip();
    
    if(travelersChoice === 1) {
        selectedDestination = chooseDestination();
        tripItinerary();
    }
    else if(travelersChoice === 2) {
        selectedRestaurant = chooseRestaurant();
        tripItinerary();
    }
    else if(travelersChoice === 3) {
        selectedTransportation = chooseTransportation();
        tripItinerary();
    }
    else if(travelersChoice === 4) {
        selectedEntertainment = chooseEntertainment();
        tripItinerary();
    }
    else if (travelersChoice === 86) {
        tripSelections();
        tripItinerary();
    }
    else if (travelersChoice === 0) {
        alert(`Your trip is approved and finalized! Enjoy your ${selectedTransportation} trip to ${selectedDestination}, your meal at ${selectedRestaurant}, and the ${selectedEntertainment}! Please like and share on Instagram!`);
        console.log(`Finalized itinerary:\n  Destination - ${selectedDestination}\n  Restaurant - ${selectedRestaurant}\n  Transportation - ${selectedTransportation}\n  Entertainment - ${selectedEntertainment}`);
        tripchoiceValues = false;
    }
    else {
        console.log("Invalid choice.");
    }

}