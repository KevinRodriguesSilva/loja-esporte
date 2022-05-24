import React,{fragment} from 'react';
import {View,Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { Ionicons} from '@expo/vector-icons';

export default function Banner(){
    return (
        <View style={estilo.banner}>
            <Text style={estilo.Texto}> Bem vindo(a) a E-STORE </Text>
        </View>
    );
}

const estilo = StyleSheet.create({
    banner:{
        width:'99,9%',
        height: 20,
        alignItems: 'center'
    }
})

