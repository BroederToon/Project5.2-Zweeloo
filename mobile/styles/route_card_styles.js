import { StyleSheet } from "react-native";

export const card = StyleSheet.create({
    /**Main card layout and titles */
    layout: {
        flex: 1,
        backgroundColor: "#FFEFB9",
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 10,
        borderTopColor: "#FFF5D2",
        borderWidth: 5,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 0,
        height: "100%",
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
        backgroundColor: "red",
        height: 3,
    },
    routeText: {
        fontSize: 11,
        marginTop: 10,
        height: 78,
        lineHeight: 13,
    },
    /**card button */
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
        marginTop: 10,
        marginBottom: 20,
        justifyContent: "center",
        alignItems: "center",
        height: 40,
    },
});
