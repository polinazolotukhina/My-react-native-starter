import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { View, Text } from 'react-native';
import * as actions from './../actions';
import ListMovie from './ListMovie';

class CinemaMovies extends Component {
    componentWillMount = () => {
        const params = {
            'primary_release_date.gte': (new Date()).toISOString().split('T')[0]
        };
        this.props.actions.getMovies(params, '/3/discover/movie?');
    };

    render() {
        const { movies } = this.props;
        return (
            <View>
                <ListMovie movie={movies.data.results} />
            </View>

        );
    }
}
CinemaMovies.propTypes = {
    actions: PropTypes.object.isRequired,
    movies: PropTypes.object.isRequired,
};


function mapStateToProps(state) {
    const { movies } = state;
    return {
        movies,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CinemaMovies);
