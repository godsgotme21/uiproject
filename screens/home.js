import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Card from '../components/card';
import Tab from '../components/bottomTab';
import Container from '../components/Container';

export default function Home(){
    return (
        <Container>
            
            <View style={{flexDirection:'row', marginTop:"20%", marginBottom:10}}>
                <Ionicons name="menu-outline" size={24} color="black"  style={{marginHorizontal: '2%'}} />
                <Ionicons name="ios-bicycle-outline" size={24} color="black" style={{marginHorizontal: '2%'}}/>
                <Ionicons name="search-outline" size={24} color="black" style={{marginHorizontal: '2%'}}/>
                <Ionicons name="notifications-outline" size={24} color="black" style={{marginHorizontal: '2%'}} />
            </View>

            <Text style={{marginVertical:10, fontSize:18, fontWeight: "500", color:'rgba(0,0,0,0.4)'}}>The world's <Text style={{fontSize: 20, fontWeight: "700", color:'red'}}>Best Bikes</Text></Text>
            <Text style={{fontSize: 18, fontWeight:"700", color:'rgba(0,0,0,0.8)'}}>Categories</Text>

            {/* <ScrollView horizontal={true}> */}
                <View style={{flexDirection: 'row', marginTop:"10%"}}>
                    <Text style={[styles.categoryItem, styles.categoryItemActive]}>All</Text>
                    <Text style={styles.categoryItem}>Roadster</Text>
                    <Text style={styles.categoryItem}>Mountain</Text>
                    <Text style={styles.categoryItem}>Urban</Text>
                    <Text style={styles.categoryItem}>Casual</Text>
                </View>
            {/* </ScrollView> */}

            <ScrollView showsVerticalScrollIndicator={false} style={{padding:'5%'}}>
            <View style={{marginTop: 20,marginHorizontal:'5%', rowGap: 20, columnGap: 20, width: '100%'}}>                
                <Card name={"Pinarello"} price={"1700.00"} wishlist={true}/>
                <Card name={"Brompton"} price={"2300.00"} wishlist={false} />
                <Card name={"Schwinn"} price={"5500.00"} wishlist={false}/>
                <Card name={"Norco"} price={"1000.00"} wishlist={false}/>
                <Card name={"Norco"} price={"1000.00"} wishlist={false}/>
                <Card name={"Norco"} price={"1000.00"} wishlist={false}/>
                <Card name={"Norco"} price={"1000.00"} wishlist={false}/>
                <Card name={"Norco"} price={"1000.00"} wishlist={false}/>
            </View>
            </ScrollView>

            <Tab homeActive={true}/>
        </Container>
    )
}



const styles = StyleSheet.create({
    categoryItem: {
        color:'rgba(0,0,0,0.5)',
        backgroundColor:'white',
        borderRadius:5,
        paddingVertical:5,
        paddingHorizontal: '1%',
        marginHorizontal:7,
        fontWeight:"500",
    },
    categoryItemActive: {
        // color: '#f17827',
        color:'blue',
    },
})

// console.log(categoryItem, categoryItemActive)