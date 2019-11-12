export default class GameHistoryModel{

    constructor({
        id,
        userId,
        date,
        winner,
    }){        
        this.id = id;
        this.userId = userId;
        this.date = date;
        this.winner = winner;
    }

    static fromJson(json){
        return new GameHistoryModel({
            id: json["id"],
            userId: json["userId"],
            date: json["date"],
            winner: json["winner"],
        })
    }

    toJson(){
        return {
            id: this.id,
            userId: this.userId,
            date: this.date,
            winner: this.winner,
        }
    }

    
}