const fs = require('fs');
let rawdata = fs.readFileSync('suburbData.json');
var {data} = JSON.parse(rawdata);
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

const names = ["Luka","Daigo","James","Harry"];
const lastname = ["Gamulin","Colan","Hull","Zhanga"];
const email = ["luka@gmail.com","daigo@gmail.com","james@gmail.com","harry@gmail.com"];
const sellType = ["AuctionedProperty","ListingProperty"]

for(let i = 0 ; i < 10; i++) {
    
    for(let j = 0; j < 10000; j++) {
        const randomSubs = getRandomInt(data.length);
        const randomUser = getRandomInt(4);
        const {suburb,postcode,state,population,median_income,lat,lng} = data[randomSubs];
        let propData = {
            firstName: names[randomUser],
            lastName: lastname[randomUser],
            email: email[randomUser],
            uid:randomUser + 1,
            location:{
                lon:lng + getRandomArbitrary(-.000001,.000001),
                lat: lat + getRandomArbitrary(-.000001,.000001),
            },
            suburb,
            postcode,
            state,
            population,
            median_income,
            sellType: sellType[getRandomInt(sellType.length)],
            rooms: getRandomInt(10) + 1,
            bathrooms:getRandomInt(5) + 1,
            area: getRandomArbitrary(100,5000),
            garage:getRandomInt(3) + 1,
            sold:getRandomInt(2)?true:false
        }

        fs.appendFileSync(`./propdata/samplePropDataBatch${i}.json`, JSON.stringify(propData) + "\n", err => {
            if(err) throw err;
            console.log("Done writing!");
        })

    }
}