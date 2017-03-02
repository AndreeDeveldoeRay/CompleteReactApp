/**
* @Author: Andreee "DevelDoe" Ray
* @Date:   2017-03-02T13:41:10+01:00
* @Email:  me@andreeray.se
* @Filename: mom-example.js
* @Last modified by:   Andreee "DevelDoe" Ray
* @Last modified time: 2017-03-02T14:27:28+01:00
*/



var moment = require('moment')

console.log(moment().format())

var now = moment()

console.log('current timestamp', now.unix())

var timestamp = 1488458642
var currentMoment = moment.unix(timestamp)
console.log('currentMoment',currentMoment.format('MMM Do, Y @ H:mm'))
