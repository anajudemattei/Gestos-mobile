import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Tulipas() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tulipas</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Luiza")}>
            <Image
                    style={styles.image}
                    source={{uri:"https://br.pinterest.com/pin/1759287347823574/"
                        }}
                    />
                <Text style={styles.text}>Minha página Home</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffebf2",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#8e435f",
    },
    text: {
        fontSize: 18,
        color: "#8e435f",
        fontWeight: "bold",
        fontFamily: "Arial",
    },
});