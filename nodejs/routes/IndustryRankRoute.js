const express = require('express')
const excelToJson = require('convert-excel-to-json');

const router = express.Router();

router.get('/', async (req, res) => {

    const result = excelToJson({
        sourceFile: './assets/itdata.xlsx'
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

    // sorting array 
    const sortedData = cleanedData.sort(function (a, b) { return b.latestYearRank - a.latestYearRank });

    // sending top 5 countries as a response
    res.send(sortedData.slice(0, 5))

});

module.exports = router;