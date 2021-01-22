


//(1) the following function will convert kilometer to meter
function kilometerToMeter(km){
    if(km < 0){
        var km = "the value of distance can not be negative";
        return km;
    }
    else{
        var kmRound = Math.round(km);
        var result = kmRound*1000;
        return result;
    }

}

var kilometer = 12;
console.log(kilometerToMeter(kilometer),"Meter");


//(2) by using following function a budget calculator has been made
function budgetCalculator(clock,phone,laptop){
    var clockResult = clock*50;
    var phoneResult = phone*100;
    var laptopResult = laptop*500;
    var total = clockResult+phoneResult+laptopResult;
    return total;
}

console.log(budgetCalculator(5,7,3));



//(3) the following function will find out the cost of hotel on different conditions
function hotelCost(days){
    var totalCost = 0;
    if(days <= 10){
        var totalCost = days*100;
    }
    else if(days <= 20){
        var firstCost = 10*100;
        var remainingDays = days - 10;
        var secondCost = remainingDays*80;
        var totalCost = firstCost+secondCost;
    }
    else{
        var firstCost = 10*100;
        var secondCost = 10*80;
        var remainingDays = days - 20;
        var thirdCost = remainingDays*50;
        totalCost = firstCost+secondCost+thirdCost;
    }
    return totalCost;
}
console.log(hotelCost(30));



//(4) the following function will find the biggest name of the array
function megaFriend(num){
    var bigName= "";
    for(var i =0; i<num.length; i++){
        var element = num[i];
        if(element.length>bigName.length){
            bigName = element;
        }
    }
    return bigName;
}

var names = ["emon", "sarjahan", "santo", "raju", "tamjid"];
console.log(megaFriend(names));







