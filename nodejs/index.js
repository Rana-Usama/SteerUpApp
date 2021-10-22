'use strict';
const excelToJson = require('convert-excel-to-json');

// const fs = require('fs');
// const csv = require('csvtojson');


// let cleanedData = []

// const readCSV = async () => {
//     let jsonArray = await csv().fromFile('./assets/itdataset.csv');
//     jsonArray = jsonArray.sort(function (a, b) {
//         return parseInt(a.Time) - parseInt(b.Time);
//     })
//     console.log(jsonArray[990])
// }


const result = excelToJson({
    sourceFile: 'assets/itdata.xlsx'
});


let cleanedData = []

for (let i = 1; i < result['OECD.Stat export'].length; i++) {
    const tempObj = result['OECD.Stat export'][i];
    const lastYearKey = Object.keys(tempObj)[Object.keys(tempObj).length - 1];
    const latestCountryRank = result['OECD.Stat export'][i][lastYearKey];

    const filteredObject = {};
    if (latestCountryRank !== '..') {
        filteredObject.country = result['OECD.Stat export'][i].A;
        filteredObject.latestYearRank = latestCountryRank;

        cleanedData.push(filteredObject);
    }


}

let sortedData = cleanedData.sort(function (a, b) { return b.latestYearRank - a.latestYearRank });

console.log(sortedData)
// console.log(result['OECD.Stat export'][0]);
