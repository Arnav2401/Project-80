import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, StatusBar, Platform, TextInput } from 'react-native'
import { WebView } from 'react-native-webview'

export default class StarMap extends React.Component {

    constructor() {
        super()
        this.state = {
            latitude: '',
            longitude: ''
        }
    }


    render() {
        const { longitude, latitude } = this.state;
        const path = `https://virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true&projection=stereo&showdate=false&showposition=false`
        return (
            <View style={styles.view}>
                <SafeAreaView
                    style={styles.safe}
                />
                <Text style={styles.title}>Star Map</Text>
                <TextInput
                    style={styles.input}
                    placeholder={'Enter The Latitude'}
                    placeholderTextColor='white'
                    onChangeText={lat => {
                        this.setState({ latitude: lat })
                    }
                    }
                    value={this.state.latitude}
                />

                <TextInput
                    style={[styles.input, { marginTop: 40 }]}
                    placeholder={'Enter The Longitude'}
                    placeholderTextColor='white'
                    onChangeText={lon => {
                        this.setState({ longitude: lon })
                    }
                    }
                    value={this.state.longitude}
                />

                <WebView
                    source={{ uri: path }}
                    style={styles.web}
                    scalesPageToFit={true}
                />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        //  backgroundColor: '#1F0024'
        backgroundColor: 'black'

    },
    safe: {
        marginTop: Platform.OS == 'android' ? (StatusBar.currentHeight) : (0)
    },
    title: {
        marginTop: 15,
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white'
    },
    input: {
        borderWidth: 3,
        width: '95%',
        alignSelf: 'center',
        marginTop: 60,
        height: 50,
        textAlign: 'center',
        borderColor: 'white',
        borderRadius: 12,
        color: 'white'
    },
    web: {
        backgroundColor: "black",
        width: 380,
        height: 380,
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        flex: .7,
    }
})