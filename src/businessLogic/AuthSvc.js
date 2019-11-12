
import * as firebase from "firebase";

export default class AuthSvc{

    static async getCurrentUserId(){
        return firebase.auth().currentUser.uid;
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