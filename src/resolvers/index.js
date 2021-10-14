const fetch = require("node-fetch");

const baseURL = `https://pokeapi.co/api/v2/`;

const resolvers = {
    Query: {
        pokemon: (parent, args) => {
            const { limit } = args;
            return fetch(`${baseURL}/pokemon?limit=${limit}`)
                .then((response) => response.json())
                .then((resp) => resp);
        },
        /*pokemonById: (parent, args) => {
            const { id } = args;
            return fetch(`${baseURL}/pokemon/${id}`).then((res) => res.json());
        },
        pokemonByName: (parent, args) => {
            const { name } = args;
            return fetch(`${baseURL}/pokemon/${name}`).then((res) =>
                res.json()
            );
        },*/
    },
};

module.exports = resolvers;
