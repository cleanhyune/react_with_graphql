import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'

function MovieList({movies, _getMovies}) {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        _getMovies(10, 0)
    }, [])

    return (
        <div>
            
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        movies: state.movie.movies
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        _getMovies: (limit, minimum_score) => {dispatch(actions.getMovies(limit, minimum_score))}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MovieList);