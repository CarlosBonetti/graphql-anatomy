import { GraphQLServer } from 'graphql-yoga'
import { getCurrentUser, getCityUf, getUserCities } from './service';

const resolvers = {
    Query: {
        me: () => getCurrentUser(),
    },
    Person: {
        cities: async (person, { first }) => {
            return await getUserCities(person, { first })
        }
    },
    City: {
        uf: (city) => getCityUf(city)
    }
}

const server = new GraphQLServer({
    typeDefs: './schema.graphql',
    resolvers
})

server.start(() => console.log('Server is running on localhost:4000'))
