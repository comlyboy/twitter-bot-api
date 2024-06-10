import type { AWS } from '@serverless/typescript';

const serverlessConfiguration: AWS = {
	service: 'twitter-bot-api',
	frameworkVersion: '3',

	custom: {
		prune: {
			automatic: true,
			number: 3
		},

		webpack: {
			webpackConfig: 'webpack.config.js', // Name of webpack configuration file
			includeModules: true, // Node modules configuration for packaging
			keepOutputDirectory: true,
			packager: 'npm',
			excludeFiles: 'src/**/*.spec.ts'
		},

		// stage: ${opt:stage, 'development'}
		//region: ${opt:region, 'us-east-1'}
		name: 'twitter-bot',
		eventBusName: 'twitter-bot-event-bus',
	},


provider: {
	name: 'aws',
		runtime: 'nodejs20.x',
	},
functions: {
	hello: {
		handler: 'serverless.handler',
			events: [
				{
					httpApi: {
						method: 'get',
						path: 'hello',
					}
				}
			]
	}
}
}

module.exports = serverlessConfiguration;