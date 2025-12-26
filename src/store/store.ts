import type { NumericLiteral } from "typescript";

type userID = string ; 

export interface chat{
    id : string ;
    userID : userID ;
    name : string ;
    message : string ; 
    upvotes : userID[];
}

export abstract class store {
    constructor() {
        
    }
    initRoom(roomID : string){

    }

    getChats( room : string , limit : number , offset: number){

    }

    addChat(userID : userID , name : string,  roomID : string, message : string){
        
    }

    upvotes(userID : userID , roomID : string , chatID : string){

    }
}