import * as firebase from "firebase";
import 'firebase/firestore';
import GameHistoryModel from "./gameHistoryModel";


export default class GameHistorySvc{

    //
    // Get game histories by user id
    //
    static async getGameHistoriesByUserId(userId){
        var docSnapshots = await firebase.firestore().collection("gameHistory")
                                                     .where("userId", "==", userId)
                                                     .get();
        
        return docSnapshots.docs.map((docSnapshot) => GameHistoryModel.fromJson(docSnapshot.data()))
    }

    //
    // Add game history
    //
    static async addGameHistory(gameHistory){
        console.log("nb4www")
    
    
        gameHistory.id = firebase.firestore().collection("gameHistory/").doc().id;
        console.log(gameHistory.winner)
        console.log(gameHistory)
        return await firebase.firestore().collection("gameHistory/").doc(gameHistory.id).set(gameHistory.toJson());
    }
}