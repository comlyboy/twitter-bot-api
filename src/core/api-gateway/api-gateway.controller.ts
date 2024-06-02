import { Controller, Get } from '@nestjs/common';

import { ApiGatewayService } from './api-gateway.service';

@Controller('api-gateway')
export class ApiGatewayController {
  constructor(private readonly apiGatewayService: ApiGatewayService) {}


  @Get()
  findAll() {
    return this.apiGatewayService.findAll();
	}

}
