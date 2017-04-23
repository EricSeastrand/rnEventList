import React, { Component } from 'react';
import { StyleSheet, View, ListView, Image } from 'react-native';
import { Thumbnail, Container, Content, Card, CardItem, Body, Button, Header, Title,  Text } from 'native-base';

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
      popo: []
    };
  }

  fetchEvents() {
    var request = new Request('https://woodlandscenter.dev.busites.com/app-api/events');
    var result = fetch(request).then((response) => response.json());
    result.then(asd => {
        
        const popo = Object.entries(asd).map(obj => obj[1])
        
        this.setState({ popo });
    });
    
  }

  componetDidMount() {

    // this.fetchEvents().then(evts => {
    //     console.log(evts);
    //     const events = evts.map(obj => obj.data);
    //     console.log(events);
    // })  
  }

  //move to elements
  renderEvents() {
    //var array = [{name: 'sdasdasd', uri: 'https://s3.amazonaws.com/busites_www/woodlandscenter2016com/pages/meta/1/1/bond_and_beyond_1488320972.png'}];
    //this.state.popo
    return this.state.popo.map((data, index) => {
      return (
        <Card key={index}>
            <CardItem>
                <Body>
                    <Thumbnail size={100} source={data.image} />
                    {/*<Image
                    source={{uri: data.image}}
                    style={styles.container}>
                    </Image>*/}
                    <Text>
                        {data.title}
                    </Text>
                </Body>
            </CardItem>
            <CardItem header>
                <Text>{data.time}</Text>
                <Text>{data.date}</Text>
                {/*<Text>{data.date}</Text>
                <Text>{date.time}</Text>*/}
                {/*<Button primary><Text> Primary </Text></Button>
                <Button primary><Text> Primary </Text></Button>*/}
            </CardItem>
        </Card>
      )
    })

  }

  render() {
      this.fetchEvents();
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