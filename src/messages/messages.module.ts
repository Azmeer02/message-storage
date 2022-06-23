import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesServices } from './messages.services';
import { MessageRepos } from './messages.repository';

@Module({
    controllers: [MessagesController],
    // Providers = Things that can be used as a dependencies for other classes
    providers: [MessagesServices,MessageRepos]
})
export class MessagesModule {}
