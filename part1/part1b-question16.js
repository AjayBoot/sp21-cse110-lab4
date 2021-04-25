let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (const car in statistics){

    //print value of car if it starts with 'r'
    if(car[0] == 'r') {

        console.log(statistics[car]);
    }
    //print value of car if the value is odd
    else if(statistics[car] % 2 == 1){

        console.log(statistics[car]);
    }
}
