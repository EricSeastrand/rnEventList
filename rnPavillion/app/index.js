import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { List, Container, Content, Body, Button, Text, Header, Title } from 'native-base';

import EventCard from './components/event-card';
import Loader from './components/loader';

export default class rnPavillion extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
        events: [],
        animating: true
    };
  }

  componentWillMount() {
    this.fetchEvents();    
  }

  //need to work on this async
  fetchEvents() {
    var request = new Request('https://woodlandscenter.dev.busites.com/app-api/events?_format=json');
    var result = fetch(request).then((response) => response.json());
    
    result.then(asd => {
        const events = Object.entries(asd).map(obj => obj[1])
        console.log(events);
        this.setState({ events, animating: false });
    }); 
  }

  render() {
    return <Container>
                <Header>
                    <Body>
                        <Title>The Pavillion</Title>
                    </Body>
                </Header>
                <Content>
                  {/* when pull up fetch more*/}
                  <List style={{padding: 5}} dataArray={this.state.events} renderRow={(item) => <EventCard {...item} key={item.id}/>} />
                  {/*need to make the loader better */}
                  <Loader animating={this.state.animating} style={{flex: 1, justifyContent: 'center', alignItems: 'center' }}/>
                </Content>
            </Container>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  picture: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 150,
  }
});