import React from 'react'
import { ImageBackground } from 'react-native'
import { Dimensions } from 'react-native'
import { StyleSheet, Text, View, Image } from 'react-native'

const HotelCards = ({index, name, image}) => {
    return (
        <View style={styles.card}>
            <Text style={styles.price}>Rs: 5590/-</Text>
            <Image style={styles.img} source={{
                uri: image,
            }} />
            <View style={styles.cardDetails}>
            <Text style={styles.name}>{name}</Text>
            <Text  numberOfLines={1}>📍 Sector D, LDA, Lucknow</Text>
            </View>
        </View>
    )
}

export default HotelCards

const styles = StyleSheet.create({
    card: {
        height:230,
        width:  Dimensions.get("screen").width /2,
        elevation: 15,
        marginRight:20,
        borderRadius:15,
        backgroundColor: "lightgreen"
    },
    img: {
      height:150,
      borderRadius: 20
    },
    price: {
      height: 30,
      width:80,
      position:'absolute',
      right:0,
      backgroundColor: "lightgreen",
      color: "white",
      zIndex:1,
      padding:5,
      fontWeight: "bold",
      borderRadius:15,

    },
    name: {
        fontSize:18,
        fontWeight: "bold",
        padding:5,
    },
    cardDetails : {
     height:100,
     borderRadius:40,
     position: "absolute",
     backgroundColor:"lightgreen",
     bottom:0,
     padding:10,
     zIndex:1,
    }


})
