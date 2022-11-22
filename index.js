
// Code your solution in this file!

function distanceFromHqInBlocks(someValue){
    return Math.abs(someValue - 42);
    // console.log(Math.abs(someValue - 42));
}
distanceFromHqInBlocks();


function distanceFromHqInFeet(someValue){
    return distanceFromHqInBlocks(someValue) * 264;
    // console.log(distanceFromHqInBlocks(someValue) * 264);

}
distanceFromHqInFeet();


function distanceTravelledInFeet(start, destination){
    return Math.abs(destination-start) * 264;
    // console.log(Math.abs(destination-start) * 264);
}
distanceTravelledInFeet()


function calculatesFarePrice(start, destination){

    const travelled = distanceTravelledInFeet(start, destination)

        if(travelled < 400){
            return 0
        }
        else if(travelled > 400 && travelled < 2000){
            return (travelled - 400) * 0.02
        }
        else if(travelled > 2000 && travelled < 2500){
            return 25
        }
        else{
            return 'cannot travel that far'
        }
}
calculatesFarePrice(50,58)

