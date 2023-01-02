import { StyleSheet } from "react-native";

export const routeType = StyleSheet.create({
    // styling for the buttons
    buttons: {
        flexDirection: "row",
        flex: 2,
    },
    typeButton: {
        height: 250,
        borderWidth: 3,
        borderRadius: 10,
        width: "40%",
        margin: 10,
        alignItems: "center",
        paddingTop: "10%",
    },
    // Text in the button
    buttonText: {
        fontSize: 20,
        fontWeight: "bold",
        height: "30%",
    },
    // Icon in the button
    icon: {
        alignSelf: "center",
        height: "70%",
    },
    // Styling info
    info: {
        flex: 1.5,
        width: "80%",
    },
    infoText: {
        fontSize: 18,
        color: "#00427D",
        fontWeight: "bold",
        textAlign: "center",
    },
});
