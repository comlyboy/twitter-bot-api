import { IsNotEmpty, IsString } from "class-validator";

export class CreateBotDto {

	@IsString()
	@IsNotEmpty()
	name: string;

	@IsString()
	@IsNotEmpty()
	consumerKey: string;

	@IsString()
	@IsNotEmpty()
	consumerSecret: string;

	@IsString()
	@IsNotEmpty()
	accessToken: string;

	@IsString()
	@IsNotEmpty()
	accessTokenSecret: string;

}