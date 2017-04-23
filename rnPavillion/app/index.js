import React, { Component } from 'react';
import { StyleSheet, View, ListView, Image } from 'react-native';
import { Thumbnail, Container, Content, Card, CardItem, Body, Button, Header, Title,  Text } from 'native-base';

import EventCard from './components/event-card';


export default class rnPavillion extends Component {
  
  constructor(props) {
    super(props);
    // const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    // this.state = {
    //   dataSource: ds.cloneWithRows([
    //     'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
    //   ])
    // };
    this.state = {
        events: []
    };
  }

  componentWillMount() {
    this.fetchEvents();    
  }

  fetchEvents() {
    
    var request = new Request('https://woodlandscenter.dev.busites.com/app-api/events');
    var result = fetch(request).then((response) => response.json());
    
    result.then(asd => {
        const events = Object.entries(asd).map(obj => obj[1])
        this.setState({ events });
    });
    
  }

  renderEvents() {
    return this.state.events.map((data, index) => {return <EventCard {...data} key={index}/>});
  }
 
  render() {
    return <Container>
                <Header>
                    <Body>
                        <Title>Header</Title>
                    </Body>
                </Header>
                <Content>
                   {this.renderEvents()}   
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




  /*<View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
      </View>
    */