import { StyleSheet } from "react-native";

export const sponsors = StyleSheet.create({
    // Each sponsor tile
    card: {
        height: 250,
        width: "80%",
        marginBottom: 10,
    },
    // The image in the tile
    image: {
        width: "100%",
        height: 120,
        borderRadius: 5,
        marginBottom: 5,
    },
    // The name of the sponsor
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    // The location bar which contains the icon and the text
    location: {
        width: "100%",
        flexDirection: "row",
    },
    // The view around the button
    buttonHolder: {
        paddingTop: 10,
        width: "100%",
        alignItems: "center",
    },
    // The button with the link to the page of the sponsor
    button: {
        justifyContent: "center",
        width: "75%",
        height: 40,
        borderRadius: 10,
        borderWidth: 3,
    },
    // the text in the button
    buttonTxt: {
        textTransform: "uppercase",
        fontWeight: "bold",
        width: "100%",
        textAlign: "center",
    },
});
