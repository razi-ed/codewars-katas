/*Problem

During a preparation of programming contest, its jury is usually faced with many difficult tasks.One of them is to select a problem simple enough to most,
    if not all, contestants to solve.

The difficulty here lies in diverse meanings of the term "simple"
amongst the jury members.So, the jury uses the following procedure to reach a consensus:
each member weights each proposed problem with a positive integer "complexity rating"
    (not necessarily different
        for different problems, value range 1 to 100).
The jury member calls "simplest"
those problems that he gave the minimum complexity rating,
and "hardest"
those problems that he gave the maximum complexity rating.

The ratings received from all jury members are then compared, and a problem is declared as "very simple",
    if it was called as "simplest"
by more than a half of the jury, and was called as "hardest"
by nobody.

Task

You are given a 2 D integer array ratings.Each subarray represents the complexity rating of a jury member.i.e.[1, 1, 1, 2].It means that there are total 4 problems, and the jury member gave complexity rating 1, 1, 1, 2
for each problem.All the subarray have the same length.

Your task is to compare all the ratings, find out the simpleset problem,
return their index(0 - based) using an array( in ascending order).If no simpleset problem found,
    return an empty array.

*/

let rating = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [10, 20, 30, 40],
    [70, 80, 90, 100]
]

let rating2 = [
    [1, 1, 1, 2],
    [5, 90, 21, 40],
    [10, 10, 9, 10],
    [3, 4, 3, 5]
]

let rating3 = [
    [1, 2, 1, 1],
    [4, 3, 3, 3],
    [5, 5, 6, 5],
    [7, 7, 8, 8]
]

function findEasiestAndHardest(dataList) {
    let EachJudgeRates = {};

    EachJudgeRates['easiestRate'] = dataList[0];
    EachJudgeRates['easiestIndex'] = 0;
    dataList.forEach((rate, indexOf) => {
        if (rate < EachJudgeRates.easiestRate) {
            EachJudgeRates['easiestRate'] = rate;
            EachJudgeRates['easiestIndex'] = indexOf;
        }
    })

    EachJudgeRates['hardestRate'] = 0;
    dataList.forEach((rate, indexOf) => {
        if (rate > EachJudgeRates.hardestRate) {
            EachJudgeRates['hardestRate'] = rate;
            EachJudgeRates['hardestIndex'] = indexOf;
        }
    })
    return EachJudgeRates;
}



function displayObjs(rates) {
    rates.forEach(e => console.log(e));
}
/*let judgesRates = rating.map(eachJudge => findEasiestAndHardest(eachJudge));
displayObjs(judgesRates);


judgesRates2*/
/*displayObjs(judgesRates2);*/

/*let judgesRates3 = rating3.map(eachJudge => findEasiestAndHardest(eachJudge));
displayObjs(judgesRates3);*/

/*
judgesRates2.map(e => HardestIndices.push(e.hardestIndex));
console.log(HardestIndices);*/
let HardestIndices = [];

let judgesRates2 = rating2.map(eachJudge => findEasiestAndHardest(eachJudge));

function a(x, arr) {
    x.map(e => arr.push(e['hardestIndex']));
}
a(judgesRates2, HardestIndices);

let allIndices = [0, 1, 2, 3];
let nh = allIndices.filter(e => { return !HardestIndices.some(x => x === e) })

displayObjs(nh);