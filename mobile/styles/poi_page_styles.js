import { StyleSheet } from "react-native";

export const poiInfo = StyleSheet.create({
    /**base layout */
    layout: {
        flex: 1,
        backgroundColor: "#FFEFB9",
        paddingLeft: 20,
        paddingRight: 5,
        paddingTop: 10,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 0,
        height: "100%",
        width: "90%",
    },
    poiTitle: {
        fontSize: 30,
        fontWeight: "500",
        padding: 0,
        margin: 0,
        paddingRight: 20,
    },
    /**image base */
    poiImage: {
        maxWidth: "100%",
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 10,
        width: "100%",
        height: 200,
    },
});
