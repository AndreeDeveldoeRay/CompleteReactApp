/**
* @Author: Andreee Ray <develdoe>
* @Date:   2017-02-28T00:22:35+01:00
* @Email:  me@andreeray.se
* @Filename: server.js
 * @Last modified by:   develdoe
 * @Last modified time: 2017-04-06T14:01:19+02:00
*/



const   EXPRESS = require('express'),
        APP     = EXPRESS(),
        PORT = process.env.PORT || 3002

APP.use(function(req,res,next){
    if (req.headers['x-forwarded-proto'] === 'https') {
        res.redirect('http://' + req.hostname +  req.url)
    } else {
        next()
    }
})

APP.use(EXPRESS.static('public'))

APP.listen(PORT)
console.log('Port: ' + PORT)
