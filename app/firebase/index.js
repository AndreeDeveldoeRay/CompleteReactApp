/**
 * @Author: Andreee Ray <develdoe>
 * @Date:   2017-03-28T12:08:42+02:00
 * @Email:  me@andreeray.se
 * @Filename: firebase.js
 * @Last modified by:   develdoe
 * @Last modified time: 2017-04-26T10:43:01+02:00
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
