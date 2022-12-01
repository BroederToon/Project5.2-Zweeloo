import { StyleSheet } from "react-native";

export const card = StyleSheet.create({
    /**Main card layout and titles */
    layout: {
        flex: 2,
        backgroundColor: "#FFEFB9",
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 10,
        borderTopColor: "white",
        borderWidth: 4,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 0,
        height: "40%",
        width: "90%",
    },
    routeTitle: {
        fontSize: 30,
        fontWeight: "500",
        padding: 0,
        margin: 0,
    },
    routeSubTitle: {
        fontSize: 15,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 5,
    },
    /**Bottom layout of card */
    bottomLayout: {
        borderTopColor: "red",
        borderWidth: 4,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 0,
        height: "100%",
    },
    routeText: {
        fontSize: 11,
        paddingTop: 10,
        height: "20%",
        overflow: "hidden",
    },
    /**card button */
    cardButton: {
        backgroundColor: "FFEFB9",
        borderWidth: 2,
        borderColor: "black",
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 10,
        alignItems: "center",
        marginLeft: 10,
        paddingTop: 5,
        paddingBottom: 5,
    },
});
