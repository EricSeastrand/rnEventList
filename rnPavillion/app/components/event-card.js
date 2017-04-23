import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Container, Content, Card, CardItem, Body, Header, Title, Text } from 'native-base';

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
                        style={styles.picture}>
                    </Image>
                    <Text>{this.props.title}</Text>
                </Body>
            </CardItem>
            <CardItem header>
                <Text>{this.props.time}</Text>
                <Text>{this.props.date}</Text>
          
            </CardItem>
        </Card>)
  }
}

const styles = StyleSheet.create({
  picture: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 150,
  }
});