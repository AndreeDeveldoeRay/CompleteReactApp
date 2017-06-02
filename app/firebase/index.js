/**
 * @Author: Andreee Ray <develdoe>
 * @Date:   2017-03-28T12:08:42+02:00
 * @Email:  me@andreeray.se
 * @Filename: firebase.js
 * @Last modified by:   andreeray
 * @Last modified time: 2017-06-01T13:24:30+02:00
 * @Desc:
 *      Firebase konfiguration file with environment variables.
 *      Using environment variables has two benifits:
 *          * Utility - using different variables for production,
 *            testing and develeopment lets us use different databases
 *          * Security - Storing database information in the repo is a bad idea
 */

import firebase from 'firebase'

try {
    var config = {
        apiKey: process.env.API_KEY,
        authDomain: process.env.AUTH_DOMAIN,
        databaseURL: process.env.DATABASE_URL,
        storageBucket: process.env.STORAGE_BUCKET,
        messagingSenderId: process.env.MESSAGING_SENDER_ID
    }
    firebase.initializeApp(config)
} catch (error) {
    console.log("Firebase authentication error",error)
}

export var githubProvider = new firebase.auth.GithubAuthProvider()
export var firebaseRef = firebase.database().ref()
export default firebase
