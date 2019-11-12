
import * as firebase from "firebase";

export default class AuthSvc{

    static async getCurrentUserId(){
        var user = firebase.auth().currentUser;
        if (user == null){
            var result = await firebase.auth().signInAnonymously();
            user = result.user;
        }
        return user.uid;
    }

    // static async getCurrentUser(){
    //     var userId = AuthSvc.getCurrentUserId()

    // }

    static async signInUserAnonymously(){
        console.log("signing in")
        firebase.auth().signInAnonymously().catch(function(error) {
            console.log("signing in with erros")
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage)

            
          });
    }

}