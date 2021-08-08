import React from 'react'
import { View, Text, Touchable, Image, TouchableOpacity, ImageBackground, SafeAreaView, Platform, StatusBar, StyleSheet } from 'react-native'


export default class Home extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <SafeAreaView
                    style={styles.safe}
                />



                <ImageBackground
                    source={require('../assets/bg_updates.png')}
                    style={{ width: '100%', height: '100%' }}
                >

                    <Image
                        source={require('../assets/main-icon.png')}
                        style={styles.img}
                    />

                    <Text style={styles.text}>Stellar App</Text>

                    <TouchableOpacity
                        style={styles.opacity}
                        onPress={() => {
                            this.props.navigation.navigate('DailyPic')
                        }}
                    >
                        <Text style={styles.cont}>
                            Daily Pictures
                        </Text>
                        <Image
                            source={require('../assets/daily_pictures.png')}
                            style={styles.image}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.opacity}
                        onPress={() => {
                            this.props.navigation.navigate('StarMap')
                        }}
                    >

                        <Text style={styles.cont}>
                            Star Map
                        </Text>
                        <Image
                            source={require('../assets/star_map.png')}
                            style={styles.image}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.opacity}
                        onPress={() => {
                            this.props.navigation.navigate('SpaceCraft')
                        }}
                    >
                        <Text style={styles.cont}>
                            Space Craft
                        </Text>
                        <Image
                            source={require('../assets/space_crafts.png')}
                            style={styles.image}
                        />
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    safe: {
        marginTop: Platform.OS === 'android' ? (StatusBar.currentHeight) : (0)
    },
    opacity: {
        flex: 0.15,
        marginTop: 65,
        marginHorizontal: 50,
        borderRadius: 30,
        backgroundColor: 'black',
    },
    img: {
        height: 130,
        width: 130,
        marginTop: 50,
        alignSelf: 'center'
    },
    text: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 10,
        textAlign: 'center'
    },
    image: {
        position: 'absolute',
        height: 65,
        width: 65,
        resizeMode: 'contain',
        right: 20,
        top: -30
    },
    cont: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        //paddingLeft: 30,
        textAlign: 'center',
        paddingTop: 12,
        paddingRight: 20
    }
})