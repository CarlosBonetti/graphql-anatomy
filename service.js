import { people, cities, ufs } from './data'

export const getCurrentUser = () => {
    return people[0]
}

export const getUserCities = (user, { first }) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(cities.slice(0, first))
        }, 500)
    })
}

export const getCityUf = (city) => {
    return ufs[0]
}
