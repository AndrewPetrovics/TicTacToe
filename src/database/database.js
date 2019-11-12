import * as firebase from "firebase";


export default class Database {

    static initialize() {
        if (!firebase.apps.length) {
            firebase.initializeApp({
                apiKey: "AIzaSyCUOleGxHI5mBkRz7f5oHFTOCcjJndgrnI",
                authDomain: "tictactoe-9ccba.firebaseapp.com",
                databaseURL: "https://tictactoe-9ccba.firebaseio.com",
                storageBucket: "tictactoe-9ccba.appspot.com",
                projectId: "tictactoe-9ccba",
            });
        }
      
    }


}
