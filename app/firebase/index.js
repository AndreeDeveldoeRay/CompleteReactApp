/**
 * @Author: Andreee Ray <develdoe>
 * @Date:   2017-03-28T12:08:42+02:00
 * @Email:  me@andreeray.se
 * @Filename: firebase.js
 * @Last modified by:   develdoe
 * @Last modified time: 2017-03-28T12:12:01+02:00
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
} catch (e) {

}



export var firebaseRef = firebase.database().ref()
export default firebase
