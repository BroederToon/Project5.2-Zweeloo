import { StyleSheet } from "react-native";

export const card = StyleSheet.create({
    // Main card layout and titles
    layout: {
        flex: 1,
        backgroundColor: "#FFEFB9",
        marginBottom: 15,
        width: "80%",
    },
    titleHolder: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
    },
    routeTitle: {
        flex: 1,
        fontSize: 30,
        fontWeight: "500",
        padding: 0,
        margin: 0,
    },
    routeSubTitle: {
        width: "100%",
        fontSize: 15,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 5,
    },
    // Bottom layout of card
    line: {
        backgroundColor: "#e2030f",
        height: 3,
    },
    routeText: {
        fontSize: 13,
        marginTop: 10,
        height: 67,
        lineHeight: 15,
    },
    // card button
    cardButton: {
        backgroundColor: "#FFEFB9",
        borderWidth: 2,
        borderColor: "black",
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 20,
        justifyContent: "center",
        alignItems: "center",
        height: 40,
        marginLeft: 10,
        flexGrow: 1,
    },
    infoButton: {
        aspectRatio: 1,
        backgroundColor: "#FFEFB9",
        borderWidth: 2,
        borderColor: "black",
        borderRadius: 5,
        marginVertical: 10,
        justifyContent: "center",
        alignItems: "center",
        height: 40,
    },
});
