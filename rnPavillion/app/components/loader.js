import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

export default class Loader extends Component {
    render() {
        return <View style={{backgroundColor: 'transparent'}}>
                <ActivityIndicator style={{backgroundColor: 'transparent'}} size="large" animating={this.props.animating}/>
               </View>
    }
} 