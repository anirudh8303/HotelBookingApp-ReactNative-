import React from 'react'
import { StyleSheet, Text, View,ScrollView, ImageBackground, Dimensions, StatusBar,Button } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const DetailsScreen = ({route, navigation}) => {
    const {h,i} = route.params;
    return (
        <View>
        <ScrollView>
            <StatusBar style="auto" backgroundColor="white" />
            <ImageBackground style={styles.Image} source={{
                uri: i,
            }} 
            >
            <Icon name="chevron-left" onPress={()=> navigation.navigate("home")} style={{margin:15}} size={20} color="white" />
            </ImageBackground>
            <View style={{alignItems:"center"}}>
                <Text style={{fontSize:25,fontWeight:"bold", padding:10}}>{h}</Text>
                <Icon size={25} style={{padding:5}} name="map-marker" />
            <Text fontSize={20}  numberOfLines={1}> Sector D, LDA, Lucknow</Text>
            </View>
            <View style={{alignItems:"center", color:"lightgrey", padding:25}}>
                <Text>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</Text>
            </View>
            <View style={{position:"relative", bottom:10, flexDirection:"row", justifyContent:"space-between", padding:20, alignItems:"center"}} >
                 <Text style={{fontWeight:"bold", color:"grey",}}>Rs: 760/per night</Text>
                 <Text style={{ fontSize:18,fontWeight:"bold", color:"white", backgroundColor:"lightgreen", flex:0.9, height:40, alignItems:"center", padding:7, paddingLeft:70, borderRadius:40}}>Book now</Text>
             </View>
        </ScrollView>
        </View>
    )
}

export default DetailsScreen

const styles = StyleSheet.create({
    Image: {
     marginTop:40,
     height:Dimensions.get("screen").height - 350,
     borderBottomLeftRadius:40,
     borderBottomRightRadius:40,
     overflow:"hidden",
    },
})
