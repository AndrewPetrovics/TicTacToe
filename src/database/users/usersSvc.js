import * as firebase from "./node_modules/firebase";
import './node_modules/firebase/firestore';
import UserModel from "./userModel";


// firebase.initializeApp({
//     apiKey: "AIzaSyCUOleGxHI5mBkRz7f5oHFTOCcjJndgrnI",
//     authDomain: "tictactoe-9ccba.firebaseapp.com",
//     databaseURL: "https://tictactoe-9ccba.firebaseio.com",
//     storageBucket: "tictactoe-9ccba.appspot.com",
//     projectId: "tictactoe-9ccba",
// });

export default class UsersSvc{


    static async getUsers(){
        var docSnapshots = await firebase.firestore().collection("users").get();
        return docSnapshots.docs.map((docSnapshot) => UserModel.fromJson(docSnapshot.data()))
    }

    static async getUsers(){
        var docSnapshots = await firebase.firestore().collection("users").get();
        return docSnapshots.docs.map((docSnapshot) => UserModel.fromJson(docSnapshot.data()))
    }
}