"use strict";

let destinationChoices = ["Washington, D.C.","Philadelphia","Annapolis","Ocean City","Richmond","New York City"];
let restaurantChoices = ["McDonald's","Applebee's","Cheesecake Factory","Outback Steakhouse","Red Lobster"];
let transportationChoices = ["Car","Bus","Train","Plane"]
let entertainmentChoices = ["Museum","Historical Landmark","Live Band","Pub Crawl","Sporting Event","Wine Tasting","Dog Show"]

function randomChoice(arr,optionType){
    let chooseOption = Math.floor(Math.random() * arr.length);
    let optionIndex = chooseOption;
    let optionChoice = `${optionType}: ${arr[chooseOption]}`;    
    return optionChoice;
}

let finalDestination = randomChoice(destinationChoices,"Destination");  
let finalRestaurant = randomChoice(restaurantChoices,"Restaurant");
let finalTransportation = randomChoice(transportationChoices,"Transportation");
let finalEntertainment = randomChoice(entertainmentChoices,"Entertainment");

function printTrip(){
  console.log(`Your random trip:\n ${finalDestination}\n ${finalRestaurant}\n ${finalTransportation}\n ${finalEntertainment}`);
}

function chooseNew(arr,optionType){
  let isThisOk = confirm(`Is the ${optionType} ok?`);
  while(isThisOk === false){
    let newChoice = randomChoice(arr,optionType);
    let isThisNewOneOk = confirm(`Is the ${newChoice} ok?`);
    if(isThisNewOneOk === true){
      isThisOk = true;
    }
  }
}

//finalDestination = chooseNew(restaurantChoices,"Restaurant");

function requestApproval(){
  let tripApproval = confirm("Do you like this trip?");
  while(tripApproval != true){
    let changeWhat = prompt(`What would you like to change?\n Enter D for destination\nEnter R for restaurant\nEnter T for Transportation\nEnter E for Entertainment`);
    if(changeWhat = "D"){
      let newDestination = chooseNew(destinationChoices,"Destination");
    }
    else if(changeWhat = "R"){
      let newRestaurant = chooseNew(restaurantChoices,"Restaurant");
    }
    else if(changeWhat = "T"){
      let newTrans = chooseNew(transportationChoices,"Transportation");
    }
    else if(changeWhat = "D"){
      let newEntertainment = chooseNew(entertainmentChoices,"Entertainment")
    }
    else{
      alert("Please enter one of the given choices - D, R, T or E")
    };
  }
}

printTrip();
requestApproval();
