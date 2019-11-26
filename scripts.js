// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function(){
    console.log('Window loaded and ready to handle events.')
    let takeOff = document.getElementById("takeoff");
    let flightStatus = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    let landing = document.getElementById("landing");
    let missionAbort = document.getElementById("missionAbort");
    let up = document.getElementById("up");
    let down = document.getElementById("down");
    let left = document.getElementById("left");
    let right = document.getElementById("right");
    let rocket = document.getElementById("rocket");
    let rocketPositionVertical = 0;
    let rocketPositionHorizontal = 0;

    takeOff.addEventListener("click", function(){
       let takeOffResponse = window.confirm('Confirm that the shuttle is ready for takeoff.')
        if(takeOffResponse === true){
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            let spaceShuttleHeightResult = (Number(spaceShuttleHeight.innerHTML) + 10000);
            spaceShuttleHeight.innerHTML = spaceShuttleHeightResult;
        }
    });
    landing.addEventListener("click", function(){
        window.alert('The shuttle is landing. Landing gear engaged.')
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = 0;
        rocket.style.position = "initial";
        rocketPositionVertical = 0;
        rocketPositionHorizontal = 0;
     });
     missionAbort.addEventListener("click", function(){
        let missionAbortResponse = window.confirm('Confirm that you want to abort the mission.')
         if(missionAbortResponse === true){
             flightStatus.innerHTML = "Mission aborted.";
             shuttleBackground.style.backgroundColor = "green";
             spaceShuttleHeight.innerHTML = 0;
             rocket.style.position = "initial";
             rocketPositionVertical = 0;
             rocketPositionHorizontal = 0;
         }
     });



     up.addEventListener("click", function(){
        let spaceShuttleHeightResult = (Number(spaceShuttleHeight.innerHTML) + 10000);
        spaceShuttleHeight.innerHTML = spaceShuttleHeightResult;
        rocket.style.position = "relative"
        rocket.style.left = rocketPositionHorizontal+"px"
        rocket.style.bottom = rocketPositionVertical+"px"
        rocketPositionVertical += 10;
        rocket.style.bottom = rocketPositionVertical+"px"
        ;
     });
     down.addEventListener("click", function(){
        let spaceShuttleHeightResult = (Number(spaceShuttleHeight.innerHTML) - 10000);
        spaceShuttleHeight.innerHTML = spaceShuttleHeightResult;
        rocket.style.position = "relative"
        rocket.style.left = rocketPositionHorizontal+"px"
        rocket.style.bottom = rocketPositionVertical+"px"
        rocketPositionVertical -= 10;
        rocket.style.bottom = rocketPositionVertical+"px";
     });
     left.addEventListener("click", function(){
        rocket.style.position = "relative"
        rocket.style.left = rocketPositionHorizontal+"px"
        rocket.style.bottom = rocketPositionVertical+"px"
        rocketPositionHorizontal -= 10;
        rocket.style.left = rocketPositionHorizontal+"px";
     });
     right.addEventListener("click", function(){
        rocket.style.position = "relative"
        rocket.style.left = rocketPositionHorizontal+"px"
        rocket.style.bottom = rocketPositionVertical+"px"
        rocketPositionHorizontal += 10;
        rocket.style.left = rocketPositionHorizontal+"px";  
     });
});
