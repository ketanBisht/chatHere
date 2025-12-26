import type { chat ,store } from "./store.js";

let globalchatid = 0 ;
export interface room {
    roomID : string ;
    chats : chat[];
}

export  class inMemoryStore implements store {
    private store : Map<string,room>;
    constructor() {
        this.store = new Map<string,room>() 
    }

    initRoom(roomID : string){
        this.store.set(roomID,{
            roomID,
            chats : []
        });
    }

    getChats( roomID : string , limit : number , offset: number){
         const room = this.store.get(roomID) ; 
         if(!room) return[];
         
         return room.chats.reverse().slice(0,offset).slice(-1*limit);
    }

    addChat(userID : string , name : string,  roomID : string, message : string){
        const room = this.store.get(roomID) ; 
         if(!room) return[];

         room.chats.push({
            id : (globalchatid++).toString(),
            userID, 
            name, 
            message,
            upvotes:[]
         });
    }

    upvotes(userID : string , roomID : string , chatID : string){
        const room = this.store.get(roomID);
        if(!room) return  ;

        const chat = room.chats.find(({id})=> id=== chatID); 
         if(chat){
            chat.upvotes.push(userID);
         }
    }
}