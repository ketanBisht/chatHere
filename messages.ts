import z from "zod" ;

export enum supportedMessages{
    joinROOM = " JOIN_ROOM", 
    sendMessage= "SEND_MESSAGE", 
    upvoteMessage = "UPVOTE_MESSAGE",
}

export const initMessage = z.object({
    name : z.string(), 
    userID : z.string(), 
    rooomID : z.string()
})

export type initMessagetype = z.infer<typeof initMessage>; 

export const userMessage = z.object({
    name : z.string(), 
    userID : z.string(), 
    rooomID : z.string()
})

export const upvoteMessage = z.object({
    name : z.string(), 
    userID : z.string(), 
    rooomID : z.string()
})


export type upvoteMessagetype = z.infer<typeof upvoteMessage>; 

export type userMessagetype = z.infer<typeof userMessage>; 

