import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { onError } from 'apollo-link-error'
import { ApolloLink, from } from 'apollo-link'

const httpLink = new HttpLink({ uri: 'http://localhost:9002/graphql' })

/**
 * Apollo cache configuration.
 */
const cache = new InMemoryCache()

/**
 * Middleware for apollo client, to set authentication headers.
 */
const authMiddleware = new ApolloLink((operation, forward) => {
	return forward(operation)
})

/**
 * Middleware to handle network errors or special API error, i. e. invalid authentication token.
 */
const onApolloError = onError(() => {})

/**
 * apollo client instance as default export.
 */
export default new ApolloClient({
	link: from([authMiddleware, onApolloError, httpLink]),
	cache,
})
