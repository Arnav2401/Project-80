import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions,
  ImageBackground,
  FlatList,
} from 'react-native';
import axios from 'axios';

export default class SpaceCraft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  renderi = ({ item }) => {
    return (
      <View style={styles.main}>
        <Image source={{ uri: item.agency.image_url }} style={styles.imgg} />
        <View style={styles.vieww}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 21,
              color: 'purple',
            }}>
            {item.name}
          </Text>
          <Text style={{ color: 'blue', paddingVertical: 10, fontSize: 15 }}>
            {item.agency.name}
          </Text>
          <Text style={{ color: 'black', paddingVertical: 10, fontSize: 18 }}>
            {item.agency.description}
          </Text>
        </View>
      </View>
    );
  };

  getData = () => {
    axios
      .get('https://ll.thespacedevs.com/2.0.0/config/spacecraft/')
      .then((x) => {
        this.setState({ data: x.data.results });
        // console.log(this.state.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount = () => {
    this.getData();
  };

  render() {
    
      if(Object.keys(this.state.data).length==0){
        return(
          <View style={{flex:1,backgroundColor:'black',justifyContent:'center',alignItems:'center',textAlign:'center'}}>
          <Text style={{color:'white'}}>Loading...</Text>
          </View>
        )
      }
      else{
        return(
      <View style={styles.view}>
        <SafeAreaView style={styles.safe} />
        <ImageBackground source={require('../47168.jpg')} style={styles.img}>
          <Text style={styles.text}>SpaceCraft</Text>
          <View>
            <FlatList
              data={this.state.data}
              renderItem={this.renderi}
              keyExtractor={(item, index) => {
                index.toString();
              }}
            />
          </View>
        </ImageBackground>
      </View>
    )
      }
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  safe: {
    paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
  },
  img: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  text: {
    backgroundColor: 'rgba(0,0,0,.8)',
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    paddingVertical: 12,
    marginTop: 15,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgg: {
    width: '95%',
    height: 200,
    marginHorizontal: 20,
    marginTop: 100,
    // marginVertical: 20,
  },
  main: {
    elevation: 10,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  vieww: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    marginHorizontal: 10,
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
});
