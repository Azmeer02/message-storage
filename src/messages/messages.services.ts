import { Injectable } from "@nestjs/common";
import { MessageRepos } from "./messages.repository";

@Injectable()
export class MessagesServices{
    constructor(public messageRepo: MessageRepos){}

    async findOne(id: string) {
        return this.messageRepo.findOne(id)
    }
    
    async findAll() {
        return this.messageRepo.findAll();
    }
      
    async createMessage(content: string) {
        return this.messageRepo.createMessage(content)
    }
}