//Write your JavaScript code here!

//const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {
    let list = document.getElementById("faultyItems");

    let form = document.querySelector("form"); //Help: query selector apendix in textbook!
    form.addEventListener("submit", function(event) { //Help: Chp25 Validation with Input > get reference to inputs. event is necessary for next line
        event.preventDefault();

        let pilotInput = document.querySelector("input[name=pilotName]");
        let pilot = pilotInput.value;

        let copilotInput = document.querySelector("input[name=copilotName]");
        let copilot = copilotInput.value;

        let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
        let fuelLevel = fuelLevelInput.value;

        let cargoMassInput = document.querySelector("input[name=cargoMass]");
        let cargoMass = cargoMassInput.value;

        formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass);

    })

    let listedPlanets = myFetch();
    console.log(listedPlanets);
    // // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    // let listedPlanetsResponse;
    // listedPlanetsResponse.then(function (result) {
    //     listedPlanets = result;
    //     console.log(listedPlanets);
    // }).then(function () {
    //     console.log(listedPlanets);
    //     // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    // })
    
 });
