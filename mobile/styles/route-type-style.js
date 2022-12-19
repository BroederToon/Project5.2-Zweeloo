import { StyleSheet } from "react-native";

export const type = StyleSheet.create({
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
        paddingTop: 40,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: "bold",
        height: "30%",
    },
    icon: {
        alignSelf: "center",
        height: "70%",
    },
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
