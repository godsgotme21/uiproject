import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import { Entypo, SimpleLineIcons, MaterialCommunityIcons } from "@expo/vector-icons";
// import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Tab({homeActive}) {
    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: "#e6e6e6", bottom: 0, left: 0, right: 0, paddingVertical: 20, paddingHorizontal: '15%'}}>
            <Entypo name="home" size={24} color={homeActive ? '#f17827' : '#a3a3a3'} />
            <MaterialCommunityIcons name="microphone-outline" size={24} color="white"/>            
            <MaterialCommunityIcons name="bag-personal" size={24} color="black" />

        </View>
    );
}