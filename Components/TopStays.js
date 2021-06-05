import React from 'react'
import { TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native'
import { StyleSheet, Text, View, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const TopStays = ({image, name, address}) => {
    return (
        <View style={styles.Topstays}>
            <Image source={{
                uri: image,
            }} size={80} style={{height:70, width:70, borderRadius:50}}  />
            <View style={{flexDirection: "column", justifyContent:"space-evenly"}}>
            <Text  style={{fontSize:20, paddingTop:5, paddingBottom:10}}>{name}</Text>
            <View style={{flexDirection:"row", justifyContent: 'space-evenly', alignItems:"center"}}>
            <Icon size={25} name="map-marker" />
            <Text fontSize={20}  numberOfLines={1}> Sector D, LDA, Lucknow</Text>
            </View>
            </View>
        </View>
    )
}

export default TopStays

const styles = StyleSheet.create({
    Topstays: {
        flexDirection: "row",
        justifyContent:"space-evenly",
        height:100,
        width:Dimensions.get("screen").width -40,
        backgroundColor:"lightgreen",
        alignItems:"center",
        marginBottom:10,
        borderRadius:30
    }
})
