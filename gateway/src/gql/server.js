const { ApolloServer } = require('apollo-server-lambda');

const { RemoteGraphQLDataSource, ApolloGateway } = require('@apollo/gateway');

class AuthenticatedDataSource extends RemoteGraphQLDataSource {
  willSendRequest({ request, context }) {
    request.http.headers.set('x-api-key', context.apiKey);
  }
}

const gateway = new ApolloGateway({
  serviceList: [
    {
      name: 'user',
      url: 'http://localhost:3001/graphql',
      apiKey: 'd41d8cd98f00b204e9800998ecf8427e'
    },
    {
      name: 'course',
      url: 'http://localhost:3002/graphql',
      apiKey: 'd41d8cd98f00b204e9800998ecf8427e'
    }
  ],
  buildService: ({ url }) => new AuthenticatedDataSource({ url })
});

const server = new ApolloServer({ gateway, subscriptions: false });

const handler = server.createHandler();

module.exports = { handler };
