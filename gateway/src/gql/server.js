const { ApolloServer } = require('apollo-server-lambda');
const { RemoteGraphQLDataSource, ApolloGateway } = require('@apollo/gateway');
const { serviceList } = require('../serviceList');

class AuthenticatedDataSource extends RemoteGraphQLDataSource {
  constructor({ url, apiKey }) {
    super({ url });
    this.apiKey = apiKey;
  }

  willSendRequest({ request }) {
    request.http.headers.set('x-api-key', this.apiKey);
  }
}

const gateway = new ApolloGateway({
  serviceList,
  buildService: ({ url, apiKey }) =>
    new AuthenticatedDataSource({ url, apiKey })
});

const server = new ApolloServer({ gateway, subscriptions: false });

const handler = server.createHandler();

module.exports = { handler };
