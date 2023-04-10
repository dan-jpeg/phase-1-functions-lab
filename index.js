
function distanceFromHqInBlocks(someValue) {
    let difference = 42 - someValue
    let distance = Math.abs(difference)
        return distance
}

function distanceFromHqInFeet(someValue) {
   let distance = distanceFromHqInBlocks(someValue)
    let distanceFeet = distance * 264;
        return distanceFeet
}

function distanceTravelledInFeet(start, destination) {
    let difference = destination - start
    let distance = Math.abs(difference)
    let distanceFeet = distance * 264
         return distanceFeet
}

function calculatesFarePrice(start, destination) {
    let distanceFeet = distanceTravelledInFeet(start, destination)
    if(distanceFeet <= 400) {
        return 0;
}   else if (distanceFeet > 400 && distanceFeet <= 2000) {
        let billableDistance = distanceFeet - 400
        let fare = billableDistance * .02 
            return fare
}   else if (distanceFeet > 2000 && distanceFeet <= 2500) {
        return 25
}   else {
        return 'cannot travel that far'
}
}