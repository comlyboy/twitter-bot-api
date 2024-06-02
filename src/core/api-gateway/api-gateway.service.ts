import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiGatewayService {


  findAll() {
    return `API-gateway works`;
	}

}
