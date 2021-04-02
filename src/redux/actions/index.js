import * as types from './ActionTypes'
import axios from 'axios'

const GRAPHQL_URL = 'http://localhost:4000'

export function getMovies(limit, minimum_score) {

    const func = async(limit = 10, minimum_score = 0) => {
        await axios.post(`${GRAPHQL_URL}`, {
            query: `
                query {
                    movies {
                        id
                        title
                        score
                    }
                }
            `
        }).then(res => console.log(res.data))
    }
    func(limit, minimum_score)
    return {
        type: types.GET_MOVIES,
        movies: ['1']
    }
}