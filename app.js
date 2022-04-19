let ImageRequest = require('./models/ImageRequest')
let { writeFile } = require('fs');
let { join } = require('path');
const axios = require('axios')
let request = require('request');
let blend = require('@mapbox/blend');
let argv = require('minimist')(process.argv.slice(2));
let {
    greeting = 'Hello',
    who = 'You',
    width = 400,
    height = 500,
    color = 'Pink',
    size = 100,
} = argv;

let firstRequestBody = new ImageRequest(greeting, who, width, height, color, size);
let secondRequestBody = new ImageRequest(null, who, width, height, color, size);
const requestOne = axios.get(firstRequestBody.BuildRequest())
const requestTwo = axios.get(secondRequestBody.BuildRequest())

axios.all([requestOne, requestTwo]).then(axios.spread((...responses) => {
    const responseOne = responses[0]
    const responseTwo = responses[1]
    console.log(`statusCode: ${responseOne.status}`)
    //console.log(responseOne);
    console.log(`statusCode: ${responseTwo.status}`)
    //console.log(responseTwo);

    // use/access the results 
})).catch(errors => {
    // react on errors.
    console.error(errors);
    return;
})

CombineAndSaveImage(responseOne, responseTwo);

function CombineAndSaveImage(firstRequestBody, secondRequestBody) {
    let firstImage = new Buffer(firstRequestBody, 'binary');
    let secondImage = new Buffer(secondRequestBody, 'binary');

    blend([
        { buffer: firstImage, x: 0, y: 0 },
        { buffer: secondImage, x: secondRequestBody, width, y: 0 },
    ], {
        width: secondRequestBody.width * 2,
        height: secondRequestBody.height,
        format: 'jpeg',
    }, function (err, result) {
        const fileOut = join(process.cwd(), `/cat-card.jpg`);
        writeFile(fileOut, data, 'binary', (err) => {
            if (err) {
                console.log(err);
                return;
            }
        });
    });

}



