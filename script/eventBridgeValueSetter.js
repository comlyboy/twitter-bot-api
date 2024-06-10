const { v4: uuidv4 } = require('uuid');
const { GetCallerIdentityCommand, STSClient } = require('@aws-sdk/client-sts');


module.exports = async ({ options, resolveVariable, }) => {
	const region = await resolveVariable('opt:region, self:provider.region, "us-east-1"');
	const { Account: accountId } = await new STSClient({ region }).send(new GetCallerIdentityCommand());

	let finalValues = {};
	const intendedValues = [
		{
			botId: 'sola-bot',
			environment: options.stage
		},
		{
			botId: 'cornelius-bot',
			environment: options.stage
		},
		{
			botId: 'festus-bot',
			environment: options.stage
		},
	];

	intendedValues.forEach(value => {
		finalValues = {
			...finalValues,
			[value.botId]: {
				version: "0",
				id: uuidv4(),
				"detail-type": "Twitter bot event schedule",
				source: "twitter.bot.events",
				account: accountId,
				time: new Date().toISOString(),
				region,
				resources: [],
				detail: value,
			}
		}
	});

	return finalValues
}