/* 
   Speed limit is 70 km. 
   takes speed of a car in km, if car is under speed limit, print 'Ok'.
   For every 5 km above speed limit, driver gets a point.
   If driver gets 12 points, license is suspended
*/

function checkSpeed(driverSpeed) {
    let speedLimit = 70;

    if(driverSpeed <= speedLimit + 4) return 'Ok.';
    let points = Math.floor((driverSpeed - speedLimit) / 5);
    if(points >= 12) return 'License Suspended.'

    return 'Points gained: ' + points +'.';
}

