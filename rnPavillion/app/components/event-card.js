import React, { Component } from 'react';
import { Alert, StyleSheet, Image, Text, WebView, Linking } from 'react-native';
import { Container, Content, Card, CardItem, Body, Header, Title, Center, Button } from 'native-base';

export default class EventCard extends Component {
  
  constructor(props) {
    super(props);
  }

  ticketInfo(url) {
    return Linking.openURL(url);
  }

  render() {
   return (
        <Card>
            <CardItem>
              <Body>
              <Image 
                source={{uri: this.props.page.image}}
                style={styles.picture} />
              <Text style={styles.title}>{this.props.page.title}</Text>
              <Text style={styles.date}>{this.props.event_date}</Text>
              </Body>
            </CardItem>
            <CardItem content>
              <Button primary block>
                <Text>MORE INFO</Text>
              </Button>
              <Button primary block onPress={() => this.ticketInfo(this.props.ticket_url)}>
                <Text>TICKETS</Text>
              </Button>
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