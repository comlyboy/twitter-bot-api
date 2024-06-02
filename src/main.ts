import { Logger } from "@nestjs/common";
import { bootstrapApplication } from "./app";

async function bootstrap() {
	const PORT = process.env.PORT || 3333;
	const { nestApplication } = await bootstrapApplication();
	await nestApplication.listen(PORT);
	Logger.debug(`Server running on ${await nestApplication.getUrl()}/api`);
}
bootstrap();
