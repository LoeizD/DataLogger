const fetch = require('node-fetch')
var fs = require('fs')

const hourInterval = 24
const endpoint = "https://www.reddit.com/r/nanocurrency"

function logData() {
    fetch(endpoint)
    .then(res => res.text())
    .then(body => {
        const arr = body.split("</")
        arr.forEach((e, i) => {
            if (e.match(">Subscribers")) {
                // console.log(e + " -- INDEX -- " + i)
                const index = i - 1
                const pArr = arr[index].split(">")
                const numUsersK = pArr[pArr.length - 1]
                const numUsersnoK = parseFloat(numUsersK) * 1000
                
                fs.appendFileSync('nano-data.csv', `${Date.now()},${numUsersnoK}\n`)
            }
        });
    });
}

setInterval(logData, hourInterval * 3600 * 1000)