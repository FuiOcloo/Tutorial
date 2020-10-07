var carLeft = 1,
    carRight = 0,
    greenMan = "no";

if (greenMan === "yes"){
    console.log("cross the road")
}
else if(carLeft ===0 || carRight === 0){
    console.log("All clear! Cross the road");
}
else {
    console.log("Stay where you are");
}