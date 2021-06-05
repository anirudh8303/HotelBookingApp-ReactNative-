import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import HotelCards from "../Components/HotelCards"
import { FlatList } from 'react-native';
import { useState } from 'react';
import color from 'color';
import TopStays from '../Components/TopStays';
import { TouchableOpacity } from 'react-native';
const HomeScreen = ({navigation}) => {
    const [hotels, setHotels] = useState([{
        index:0,
        name:"Phoenix Inn",
        image: "https://www.sleepermagazine.com/wp-content/uploads/2016/07/edition.jpg"
    }, {
        index:1,
        name:"The Renaissance",
        image: "data:image/jpeg;base64,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"
    },
    {
        index:1,
        name:"Phoenix Inn",
        image: "https://www.sleepermagazine.com/wp-content/uploads/2016/07/edition.jpg"
    },
    {
        index:1,
        name:"Phoenix Inn",
        image: "https://www.sleepermagazine.com/wp-content/uploads/2016/07/edition.jpg"
    },
    {
        index:1,
        name:"Phoenix Inn",
        image: "https://www.sleepermagazine.com/wp-content/uploads/2016/07/edition.jpg"
    }
])
    return (
        <SafeAreaView style={{flex:1, backgroundColor: "white"}}>
            <View style={styles.header} >
            <Text  style={{fontSize:30, fontWeight:"bold"}}>Find Your Hotel</Text>
            <Icon  name="user" style={{marginTop:20, marginRight:10}} size={30} color="lightgreen"/>
            </View>
            <View style={{flexDirection:"row", paddingHorizontal:20}}>
                <Text style={{fontSize:30, fontWeight:"bold"}}>In</Text>
                <Text style={{fontSize:30, fontWeight:"bold", marginLeft:5, color:"lightgreen"}}>India</Text>
            </View>
             <View style={styles.searchContainer}>
                 <Icon name="search" size={25} style={{padding:10, marginTop:2}}/>
                 <TextInput placeholder="Search your destination..." style={{maxWidth:250}}></TextInput>
             </View> 
             <ScrollView showsVerticalScrollIndicator={false}>
             <View>
                 <Text style={{paddingHorizontal:25, fontSize:18, fontWeight:"bold"}}>Recommended for <Text style={{color:"lightgreen"}}>You 💚</Text></Text>
                <FlatList horizontal showsHorizontalScrollIndicator={false} data={hotels} contentContainerStyle={{paddingVertical:30, padding:20}}
                renderItem={({item})=> (
                <TouchableOpacity onPress={()=>navigation.navigate("details", {h: item.name,
                        i: item.image,
                        })} activeOpacity={0.4} >
                <HotelCards name={item.name} index={item.index} image={item.image}/>
                </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id}
                />
            </View>   
            <View style={{paddingHorizontal:20}} >
            <Text style={{paddingHorizontal:10, fontSize:20, fontWeight:"bold", paddingBottom:20}}>Top Stays</Text>
            {hotels.map((hotel)=> (
                <TouchableOpacity onPress={()=>navigation.navigate("details", {h: hotel.name,
                i: hotel.image,
                })} activeOpacity={0.4} >
                <TopStays image={hotel.image} name={hotel.name}/>
                </TouchableOpacity>
            ))}
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    header: {
        marginTop: 50,
        justifyContent:  "space-between",
        paddingHorizontal :20,
        flexDirection: "row"
    },
    searchContainer: {
       height:55,
       backgroundColor: "lightgreen",
       margin:20, 
       borderRadius:15,
       flexDirection: "row",
    }
})
