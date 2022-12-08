import { StyleSheet, Dimensions } from "react-native";

export const map = StyleSheet.create({
    mapView: {
        width: "100%",
        height: "90%",
    },
    node: {
        backgroundColor: "black",
        borderRadius: 10,
    },
    nodeText: {
        color: "white",
        padding: 7,
        fontWeight: "bold",
        fontSize: 15,
    },
    logo: {
        width: 50,
        height: 50,
    },
});
