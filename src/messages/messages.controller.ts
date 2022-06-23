import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesServices } from './messages.services';

@Controller('messages')
export class MessagesController {
  constructor(public messageService: MessagesServices){}

  @Get()
  listMessages() {
    return this.messageService.findAll();
  }
  @Post()
  createMessages(@Body() body: CreateMessageDto) {
    return this.messageService.createMessage(body.content)
  }
  @Get('/:id')
  async getMessages(@Param('id') id: string){
    const message = await this.messageService.findOne(id);
    if(!message){
      throw new NotFoundException('Message Not Found');
    }
    return message;
  }
}
