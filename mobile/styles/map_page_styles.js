import { StyleSheet } from "react-native";

export const map = StyleSheet.create({
    // Styling node
    mapView: {
        width: "100%",
        flex: 4.5,
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
    // Styling logo
    logo: {
        width: 50,
        height: 50,
    },
    // Styling pause button
    pauseButton: {
        position: "absolute",
        bottom: 90,
        right: 30,
        backgroundColor: "#004284",
        padding: 7,
        borderRadius: 30,
    },
    // Styling stop button
    stopButton: {
        position: "absolute",
        bottom: 40,
        right: 30,
        backgroundColor: "#e41d18",
        padding: 8,
        borderRadius: 30,
    },
});
