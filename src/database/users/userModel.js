export default class UserModel{

    
    constructor({
        email,
        id
    }){
        this.email = email;
        this.id = id;
    }

    static fromJson(json){
        return new UserModel({
            id: json["id"],
            email: json["email"],
        
        })
    }

    toJson(){
        return {
            id: this.id,
            email: this.email,
        }
    }
    
}