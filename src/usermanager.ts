import type { connection } from "websocket";

interface user {
    name : string ; 
    id : string ;
}

interface Room{
    users: user[]
    conn: connection ; 
}

export class userManager{
    private rooms : Map<string,Room>;

    constructor(){
        this.rooms = new Map<string,Room>()
    }

    addUser(name: string , userID : string , roomID : string , socket : connection){
        if(this.rooms.get(roomID)){
            this.rooms.set(roomID,{
                users: [], 
                conn : socket 
            });
        }

        this.rooms.get(roomID)?.users.push({
            id: userID, 
            name 
        })
    }
    removeUser(roomID: string , userID : string ){
         const users = this.rooms.get(roomID)?.users; 
         if(users){
            users.filter(({id})=> id!== userID);
         }
    }
    getUser(roomID : string , userID : string ) :user|null {
        const user = this.rooms.get(roomID)?.users.find((({id})=> id === userID)); 
        return user ??  null ; 
    }

    
}