/**
 * @Author: Andreee Ray <develdoe>
 * @Date:   2017-03-28T12:08:42+02:00
 * @Email:  me@andreeray.se
 * @Filename: firebase.js
 * @Last modified by:   develdoe
 * @Last modified time: 2017-04-05T16:15:55+02:00
 */

import firebase from 'firebase'

try {
    var config = {
        apiKey: "AIzaSyCQKt4ZnF72d8N4u53zgiC8OKNvUAvuoLQ",
        authDomain: "tests-492e3.firebaseapp.com",
        databaseURL: "https://tests-492e3.firebaseio.com",
        storageBucket: "tests-492e3.appspot.com",
        messagingSenderId: "709004678056"
    }
    firebase.initializeApp(config)
} catch (error) {
    console.log("Firebase authentication error",error)
}

export var firebaseRef = firebase.database().ref()
export default firebase
