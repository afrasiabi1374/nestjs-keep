import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log("gapucc000009977ppp1222ali0ppppppppjj44455jjjj")
    return this.appService.getHello();
  }
}

