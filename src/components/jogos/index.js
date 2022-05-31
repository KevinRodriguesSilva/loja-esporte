import React from "react";
import { View, TouchableOpacity, StyleSheet, Text, Image } from "react-native";

export default function Jogos({ titulo, valor, imagem}) {
    return (
    <TouchableOpacity style={estilo.containerJogos}>
        <Image
            style={estilo.images}
            source={require(`../../imagens/${imagem}`)}
        />
        <Text style={estilo.titulo}>{titulo}</Text>
            <Text style={estilo.valor}>{valor}</Text>
    </TouchableOpacity>
    );
    }
const estilo = StyleSheet.create({
    containerJogos: {
        backgroundColor: "#DCDCDC",
        borderRadius: 10,
        marginTop: 8,
        padding: 10,
        margin: 2,
        aligntItems: "center",
        justifytContent: "space-between",
        widht: 300,
        height: 300,
        marginLeft: 8,
    },
    titulo: {
        color: "black",
        fontSize: 12,
        fontWeight: "bold",
    },
    valor: {
        color: "green",
        fontSize: 12,
        marginLeft: 0,
        marginTop: 2,
        fontWeight: "bold",
    },
    images: {
        width:230,
        height:230
    },
});






