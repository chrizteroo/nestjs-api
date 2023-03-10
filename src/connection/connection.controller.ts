import { Controller, Get } from '@nestjs/common';
import { ConnectionService } from './connection.service';

@Controller('connection')
export class ConnectionController {
  constructor(private readonly connectionService: ConnectionService) {}

  @Get()
  getHello(): string {
    return this.connectionService.getHello();
  }
}
