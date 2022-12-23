import { StyleSheet } from "react-native";

export const lineStyle = StyleSheet.create({
    // Style for the dividing line
    line: {
        backgroundColor: "#FFF5D2",
        width: "85%",
        height: 6,
        position: "relative",
        marginBottom: 15,
    },
    // The diamonds on the ends of the line
    diamondLeft: {
        backgroundColor: "#FFF5D2",
        width: 16,
        height: 16,
        position: "absolute",
        top: -5,
        left: 0,
        transform: [{ rotate: "45deg" }]
    },
    diamondRight: {
        backgroundColor: "#FFF5D2",
        width: 16,
        height: 16,
        position: "absolute",
        top: -5,
        right: 0,
        transform: [{ rotate: "45deg" }]
    },
});
