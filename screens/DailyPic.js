import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    Platform,
    SafeAreaView,
    ImageBackground,
    Dimensions,
    ScrollView,
} from 'react-native';
import axios from 'axios';

export default class DailyPic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            api: {},
        };
    }

    getApi = () => {
        axios
            .get(
                'https://api.nasa.gov/planetary/apod?api_key=5TtNVzhcWkrmQr4X6XHe4RTr5ylui08UgsrT7HAh'
            )
            .then((x) => {
                this.setState({ api: x.data });
            })
            .catch((err) => {
                console.log(err);
            });
    };

    componentDidMount = () => {
        this.getApi();
    };

    render() {
        if (Object.keys(this.state.api).length == 0) {
            return (
                <View style={styles.views}>
                    <Text style={styles.texttt}>Loading...</Text>
                </View>
            );
        } else {
            return (
                <View style={styles.view}>
                    <SafeAreaView style={styles.safe} />
                    <ImageBackground
                        source={{ uri: this.state.api.url }}
                        style={styles.img}>
                        <Text style={styles.text}>Picture Of The Day</Text>
                        <ScrollView>
                            <Text style={styles.textt}>{this.state.api.title}</Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 17, marginTop: 12, paddingLeft: 20, color: 'pink' }}>Date: {this.state.api.date}</Text>
                            <Text
                                style={[
                                    styles.textt,
                                    {
                                        marginTop: '5%',
                                        textAlign: 'justify',
                                        marginHorizontal: 20,
                                        color: 'white',
                                        fontSize: 20,
                                    },
                                ]}>
                                {this.state.api.explanation}
                            </Text>
                        </ScrollView>
                    </ImageBackground>
                </View>
            );
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
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 15,
        textAlign: 'center',
        backgroundColor: 'rgba(118,118,118,.6)',
        paddingVertical: 15,
    },
    img: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        // resizeMode: 'cover',
    },
    textt: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: '61%',
        color: 'pink'
    },
    views: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        flex: 1,
    },
    texttt: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
