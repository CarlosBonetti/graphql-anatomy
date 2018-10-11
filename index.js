import { GraphQLServer } from 'graphql-yoga'

const resolvers = {
    Query: {
        me: () => ({
            id: 1,
            name: 'Carlos Bonetti',
            profilePicture: {
                url: 'https://cdn/bonetti.jpg',
                width: 200,
                height: 200,
            },
        }),
    },
    Person: {
        cities: (_, { first }) => ([
            { id: 1, name: 'Videira' },
            { id: 2, name: 'Florianópolis' },
            { id: 3, name: 'Itajaí' },
        ].slice(0, first))
    },
    City: {
        uf: () => ({
            id: 1,
            name: 'Santa Catarina',
            abbreviation: 'SC'
        })
    }
}

const server = new GraphQLServer({
    typeDefs: './schema.graphql',
    resolvers
})

server.start(() => console.log('Server is running on localhost:4000'))
