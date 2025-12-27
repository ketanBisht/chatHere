interface user {
    name : string ; 
    id : string ;
}

interface Room{
    users: user[]
}

export class userManager{
    private rooms : Map<string,Room>;

    constructor(){
        this.rooms = new Map<string,Room>()
    }

    addUser(name: string , userID : string , roomID : string , socket : WebSocket){
        if(this.rooms.get(roomID)){
            this.rooms.set(roomID,{
                users: []
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
}