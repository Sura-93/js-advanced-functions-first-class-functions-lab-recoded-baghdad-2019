// Code your solution in this file!
const returnFirstTwoDrivers = function (arr){
  return arr.slice(0,2);
}
const returnLastTwoDrivers = function (arr) {
  
  return arr.slice(-2);
}

let selectingDrivers  = [returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier (int) {
  return function (fare){
    return fare *int;
  }
  
}
const fareDoubler =  createFareMultiplier()
const fareTripler = createFareMultiplier()

