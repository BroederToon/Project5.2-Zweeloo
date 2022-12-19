import { StyleSheet } from "react-native";

export const home = StyleSheet.create({
    background: {
        width: "100%",
        height: "100%",
        position: "relative",
        alignItems: "center",
    },
    logo: {
        position: "absolute",
        top: 50,
    },
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
    textOverlay: {
        textAlign: "center",
        fontWeight: "500",
        fontSize: 15,
        color: "#00427D"
    },
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
    startBtn: {
        width: "60%",
        borderWidth: 3,
        borderRadius: 10,
        backgroundColor: "transparent",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    startBtnText: {
        textTransform: "uppercase",
        fontWeight: "bold",
        fontSize: 20,
        marginLeft: 10,
        marginVertical: 10,
    },
});
