import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import {CardSection, Card} from './common'

class ListItem extends Component {
    render() {
        const { movie } = this.props;
        console.log("movie", movie)
        return (
            <ScrollView contentContainerStyle={{ paddingVertical: 20, paddingHorizontal: 20 }}>
            <View>
                    {
                      movie&&movie.map((item, index) =>
                        <View key={index} style={styles.containerStyle}>
                             <Image
                                 source={{ uri: 'https://image.tmdb.org/t/p/w342' + item.backdrop_path }}
                                 style={styles.imgStyle}
                             />
                            <Text style={styles.headStyle}>{item.title}</Text>
                            <Text>{item.overview}</Text>
                            <Text style={styles.rateStyle}>Release Day:{item.release_date}</Text>
                            <Text style={styles.rateStyle}>Rating: {item.vote_average}</Text>
                        </View>)
                    }
                    </View>
            </ScrollView>
        );
    }
}
const styles = {
    containerStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'space-around',
        paddingTop: 10,
        paddingBottom: 10,
    },
    imgStyle: {
        width: '100%',
        height: 250,
    },
    headStyle: {
        padding: 10,
        fontSize: 20
    },
    rateStyle: {
        fontSize: 15,
        paddingTop:10
    }


};

export default ListItem;
