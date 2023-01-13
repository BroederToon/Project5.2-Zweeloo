import { StyleSheet } from "react-native";

// Styling for the home page
export const home = StyleSheet.create({
    // Background image
    background: {
        width: "100%",
        height: "100%",
        position: "relative",
        alignItems: "center",
    },
    // Logo overlay
    logo: {
        position: "absolute",
        top: 50,
    },
    // verlay background for the text
    textOverlayBg: {
        backgroundColor: "rgba(255, 239, 185, 0.75)",
        position: "absolute",
        width: "100%",
        height: 100,
        top: 225,
        left: 0,
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
    },
    // Text in the overlay
    textOverlay: {
        textAlign: "center",
        fontWeight: "500",
        fontSize: 15,
        color: "#00427D"
    },
    // Background for the start button
    startBar: {
        backgroundColor: "#FFEFB9",
        position: "absolute",
        width: "100%",
        height: 75,
        bottom: 125,
        left: 0,
        justifyContent: "center",
        alignItems: "center",
    },
    // Start button
    startBtn: {
        width: "60%",
        borderWidth: 3,
        borderRadius: 10,
        borderColor: "#333333",
        backgroundColor: "transparent",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    // Text in the start button
    startBtnText: {
        textTransform: "uppercase",
        fontWeight: "bold",
        fontSize: 20,
        marginLeft: 10,
        marginVertical: 10,
        color: "#333333",
    },
});
