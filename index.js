// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
  return drivers.slice(0,2)
}
const returnLastTwoDrivers = function(drivers){
  return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]



const createFareMultiplier = function (num){
  return function(fare){
    return fare * num
  }
};

function fareDoubler(fare){
    const multiplier = createFareMultiplier(2)
    return multiplier(fare)
};

function fareTripler(fare){
    const tripMultiplier = createFareMultiplier(3)
    return tripMultiplier(fare)
};

const selectDifferentDrivers = function(drivers, fn){
  return fn(drivers)
};

// selectDifferentDrivers() — This function takes two arguments, an array of drivers and either the returnFirstTwoDrivers()
// or returnLastTwoDrivers() function.
// Based on these two arguments, selectDifferentDrivers() will return either
// the first two drivers or the last two drivers.
