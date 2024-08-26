// Write your helper functions here!

//require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
//     return `
//             <div>
//                  <h2>Mission Destination</h2>
//                  <ol>
//                      <li>Name: ${json[i].consolename}</li>
//                      <li>Diameter: </li>
//                      <li>Star: ${star}</li>
//                      <li>Distance from Earth: </li>
//                      <li>Number of Moons: </li>
//                  </ol>
//                  <img src=""> </img>
//             </div>
//         `
 };
 
 function validateInput(testInput) {
    let result = "";
    if (testInput === ""){
        result = "Empty";
    } else if (typeof(Number (testInput)) === Number){
        result = "Is a Number";
    } else { //isNaN(testInput)===true
        result = "Not a Number"
    }
    return result; //alert(result) does work!

 }

 function formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoLevel) { //should be using validateInput but (testInput) is not defined
    console.log("yay form submission!")

    if (pilotName === "" || copilotName === ""){
        alert("All fields are required")
     } else if (isNaN(pilotName) === false || isNaN(copilotName) === false) {
         alert("Pilot and Copilot input cannot be numbers")        
    } else {
        list.style.visibility="visible"; //task does not say to make this visible
        pilotStatus.innerHTML=`Pilot ${pilotName} is ready for lunch`;
        copilotStatus.innerHTML=`Copilot ${copilotName} is ready for lunch`;
    }


    if (isNaN(fuelLevel)){
        alert ("Fuel Level must be a number.")
    } else if (fuelLevel < 10000){
        list.style.visibility="visible";
        fuelStatus.innerHTML="Not enough fuel for the journey";
        launchStatus.innerHTML="Shuttle not ready for launch";
        launchStatus.style.color="red";
    }
 
    if (isNaN(cargoLevel)) {
        alert ("Cargo Mass must be a number.")
    } else if (cargoLevel > 10000){
        list.style.visibility="visible";
        cargoStatus.innerHTML="Too much mass for the shuttle to take off";
        launchStatus.innerHTML="Shuttle not ready for launch";
        launchStatus.style.color="red";
    }

    if ((cargoStatus.innerHTML === "Cargo mass low enough for launch") && (fuelStatus.innerHTML === "Fuel level high enough for launch") && (pilotName !== "") && (copilotName !== "")){
        launchStatus.style.color="green";
        launchStatus.innerHTML="Shuttle is ready for launch";
    }
    
 }
 
 async function myFetch() {
     let planetsReturned; //what is await? I don't actually get this, its just copied
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        response.json().then(function(json) {
            const destination = document.getElementById("missionTarget");
            let i = 0;
            i = Math.floor(Math.random()*6);
            console.log("78 script helper index",i);
            destination.innerHTML = `
            <div>
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${json[i].name}</li>
                     <li>Diameter: ${json[i].diameter}</li>
                     <li>Star: ${json[i].star}</li>
                     <li>Distance from Earth: ${json[i].distance}</li>
                     <li>Number of Moons: ${json[i].moons}</li>
                 </ol>
                 <img src="${json[i].image}"> </img>
            </div>
        `;            
        })
  });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;