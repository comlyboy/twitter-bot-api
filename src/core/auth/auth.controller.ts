import { Controller, Get, Post, Body, Param } from '@nestjs/common';

import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';

@Controller('auth')
export class AuthController {

	constructor(
		private readonly authService: AuthService
	) { }

	@Post('register')
	register(@Body() createAuthDto: CreateAuthDto) {
		return this.authService.create(createAuthDto);
	}

	@Post('login')
	login() {
		return this.authService.findAll();
	}

	@Get('profile')
	getProfile(@Param('id') id: string) {
		return this.authService.findOne(+id);
	}

}
