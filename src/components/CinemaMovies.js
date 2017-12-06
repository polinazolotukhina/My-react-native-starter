import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { View, Text } from 'react-native';
import * as actions from './../actions';

class CinemaMovies extends Component {
    componentWillMount = () => {
        const params = {
            'primary_release_date.gte': '2014-09-15',
            'primary_release_date.lte': '2014-10-22'
        }
        this.props.actions.getMovies(params, '/3/discover/movie?');
    };
    
    render() {
        return (
            <View>
                <Text>hi</Text>
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
