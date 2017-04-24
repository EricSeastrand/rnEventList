import React, { Component } from 'react';
import { StyleSheet, Image, Text } from 'react-native';
import { Container, Content, Card, CardItem, Body, Header, Title, Center } from 'native-base';

export default class EventCard extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
   return (
        <Card>
            <CardItem>
                <Body>
                    <Image
                        source={{uri: this.props.image}}
                        style={styles.picture} />
                    <Text style={styles.title}>{this.props.title}</Text>
                </Body>
            </CardItem>
            <CardItem header>
                <Text style={styles.date}>{this.props.date}</Text>
            </CardItem>
            <CardItem header>
                <Text style={styles.time}>{this.props.time}</Text>
            </CardItem>
        </Card>)
  }
}

const styles = StyleSheet.create({
  picture: {
    width:200,
    height:200,
    borderRadius: 100,
    alignSelf: 'center',
    flex: 1
  },
  title: {
    fontWeight: "900",
    alignSelf: 'center',
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    color: '#43308e',
    marginTop: 10
  },
  footer: {

  },
  date: {
    fontWeight: "bold",
    color: 'black',
    fontSize: 32,
    textAlign: 'center',
    alignSelf: 'center',
    flex: 1,
  },
  time: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    alignSelf: 'center',
    flex: 1,
  }

});