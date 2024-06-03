import { Logger } from "@nestjs/common";
import { bootstrapApplication } from "./app";

async function bootstrap() {
	const PORT = process.env.PORT || 3333;
	const { application } = await bootstrapApplication();
	await application.listen(PORT);
	Logger.debug(`Server running on ${await application.getUrl()}/api`);
}
bootstrap();
